/**
 * GALXAI BroccoliDB High-Throughput Ring Buffer Stream Pool
 *
 * Bounded, pre-allocated circular slot pool for same-thread stream ingestion:
 * 1. Pre-allocates fixed-capacity slot records (default 128 slots).
 * 2. Maintains circular head/tail pointers and explicit overwrite accounting.
 * 3. Returns snapshots so reused slots cannot mutate data held by consumers.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export class BroccoliRingBufferStreamPool {
    static instance;
    slots;
    capacity;
    headIndex = 0;
    tailIndex = 0;
    activeCount = 0;
    totalEnqueued = 0;
    totalDequeued = 0;
    totalOverwritten = 0;
    poolAuditTable;
    constructor(capacity = 128) {
        if (!Number.isSafeInteger(capacity) || capacity <= 0) {
            throw new RangeError('Ring buffer capacity must be a positive safe integer.');
        }
        this.capacity = capacity;
        this.slots = new Array(this.capacity);
        for (let i = 0; i < this.capacity; i++) {
            this.slots[i] = {
                slotId: i,
                sequenceNumber: 0,
                isOccupied: false,
                timestampMs: 0,
                chunkSize: 0,
                payload: '',
                anomalyScore: 0,
            };
        }
        this.poolAuditTable = new BroccoliDbTable('ring_buffer_stream_pool_audit');
    }
    static getInstance(capacity = 128) {
        if (!BroccoliRingBufferStreamPool.instance) {
            BroccoliRingBufferStreamPool.instance = new BroccoliRingBufferStreamPool(capacity);
        }
        return BroccoliRingBufferStreamPool.instance;
    }
    /**
     * Creates an isolated pool. Prefer this for request- or stream-scoped ingestion;
     * getInstance() remains available for the process-wide telemetry pool.
     */
    static create(capacity = 128) {
        return new BroccoliRingBufferStreamPool(capacity);
    }
    /**
     * Enqueues a stream chunk into the circular ring buffer
     */
    push(payload, anomalyScore = 0, metadata) {
        if (typeof payload !== 'string') {
            throw new TypeError('Ring buffer payload must be a string.');
        }
        if (!Number.isFinite(anomalyScore)) {
            throw new RangeError('Ring buffer anomalyScore must be finite.');
        }
        const slot = this.slots[this.headIndex];
        if (slot.isOccupied) {
            this.totalOverwritten++;
            this.tailIndex = (this.tailIndex + 1) % this.capacity;
        }
        else {
            this.activeCount++;
        }
        slot.sequenceNumber = ++this.totalEnqueued;
        slot.isOccupied = true;
        slot.timestampMs = Date.now();
        slot.chunkSize = payload.length;
        slot.payload = payload;
        slot.anomalyScore = Math.max(0, Math.min(1, anomalyScore));
        slot.metadata = metadata;
        this.headIndex = (this.headIndex + 1) % this.capacity;
        return this.snapshot(slot);
    }
    /**
     * Dequeues the oldest available chunk from the ring buffer
     */
    pop() {
        const slot = this.slots[this.tailIndex];
        if (!slot.isOccupied) {
            return null;
        }
        const result = this.snapshot(slot);
        slot.isOccupied = false;
        slot.payload = '';
        slot.chunkSize = 0;
        slot.anomalyScore = 0;
        slot.metadata = undefined;
        this.activeCount--;
        this.totalDequeued++;
        this.tailIndex = (this.tailIndex + 1) % this.capacity;
        return result;
    }
    /**
     * Drains all currently active slots in chronological sequence
     */
    drainAll() {
        const active = [];
        let curr = this.tailIndex;
        const countToDrain = this.activeCount;
        for (let i = 0; i < countToDrain; i++) {
            const slot = this.slots[curr];
            active.push(this.snapshot(slot));
            slot.isOccupied = false;
            slot.payload = '';
            slot.chunkSize = 0;
            slot.anomalyScore = 0;
            slot.metadata = undefined;
            this.totalDequeued++;
            curr = (curr + 1) % this.capacity;
        }
        this.activeCount = 0;
        this.tailIndex = this.headIndex;
        return active;
    }
    /**
     * Returns current buffer utilization statistics
     */
    getStats() {
        return {
            capacity: this.capacity,
            activeCount: this.activeCount,
            totalEnqueued: this.totalEnqueued,
            totalDequeued: this.totalDequeued,
            totalOverwritten: this.totalOverwritten,
            headIndex: this.headIndex,
            tailIndex: this.tailIndex,
        };
    }
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.slots[i].isOccupied = false;
            this.slots[i].payload = '';
            this.slots[i].sequenceNumber = 0;
        }
        this.headIndex = 0;
        this.tailIndex = 0;
        this.activeCount = 0;
        this.totalEnqueued = 0;
        this.totalDequeued = 0;
        this.totalOverwritten = 0;
        this.poolAuditTable.clear();
    }
    snapshot(slot) {
        return {
            ...slot,
            metadata: slot.metadata ? { ...slot.metadata } : undefined,
        };
    }
}
//# sourceMappingURL=BroccoliRingBufferStreamPool.js.map