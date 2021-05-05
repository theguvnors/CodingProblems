/*
    A stack uses LIFO (last-in first-out) ordering.
    That is, as in a stack of dinner plates, the most recent item added to the stack is the first item to be removed.

    Unlike an array, a stack does not offer constant-time access to the ith item.
    However, it does allow constant-time adds and removes, as it doesn't require shifting elements around.

    One place where stacks are often useful is in certain recursive algorithms, Sometimes you need to push temporary
    data onto a stack as you recurse, but then remove them as you backtrack.
 */

class StackNode<T> {
    public next: StackNode<T>;
    constructor(public data: T) {}
}

class Stack<T> {
    private top: StackNode<T>;

    public pop(): T {
        if (this.isEmpty()) throw 'exception';
        const item: T = this.top.data;
        this.top = this.top.next;
        return item;
    }

    public push(item: T): void {
        let t: StackNode<T> = new StackNode<T>(item);
        t.next = this.top;
        this.top = t;
    }

    public peek(): T {
        if (this.top == null) throw 'peek - empty stack exception';
        return this.top.data;
    }

    public isEmpty(): boolean {
        return this.top == null;
    }
}
// Test code

let stack = new Stack();

stack.push('0');
stack.push('1');
stack.push('2');

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
