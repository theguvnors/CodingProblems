/*
    A queue implements FIFO (first-in first-out) ordering.
    As in a line or queue at a ticket stand, items are removed from the data structure in the same order that they are
    added.

    A queue can also be implemented with a linked list. In Fact, they are essentially the same thing, as long as items
    are added and removed from opposite sides.
 */

class QueueNode<T> {
    public next: QueueNode<T>;
    constructor(public data: T) {}
}

class Queue<T> {
    private first: QueueNode<T>;
    private last: QueueNode<T>;

    public add(item: T): void {
        const t: QueueNode<T> = new QueueNode<T>(item);
        if (this.last != null) this.last.next = t;
        this.last = t;
        if (this.first == null) this.first = this.last;
    }

    public remove(): T {
        if (this.first == null) throw 'remove isEmpty';
        const data: T = this.first.data;
        this.first = this.first.next;
        if (this.first == null) this.last = null;
        return data;
    }

    public peek() {
        if (this.isEmpty()) throw 'peek - isEmpty';
        return this.first.data;
    }

    public isEmpty() {
        return this.first == null;
    }
}

let queue = new Queue();
queue.add('0');
queue.add('1');
queue.add('2');
console.log(queue.peek());
queue.remove();
console.log(queue.peek());
queue.remove();
console.log(queue.isEmpty());
console.log(queue.peek());
queue.remove();
console.log(queue.isEmpty());
