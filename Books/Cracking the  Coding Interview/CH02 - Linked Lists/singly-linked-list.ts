/*
    A Singly Linked List.
    An item only knows of it's "next" link and not it's previous.
 */
class SinglyLinkedListNode<T> {
    public next: SinglyLinkedListNode<T> = null;
    constructor(public data: T) {}
}

class SinglyLinkedList<T> {
    private node: SinglyLinkedListNode<T>;

    public appendToTail(data: T): void {
        const end = new SinglyLinkedListNode<T>(data);

        if (this.node == null) {
            this.node = new SinglyLinkedListNode(data);
        } else {
            let n: SinglyLinkedListNode<T> = this.node;
            while (n?.next != null) {
                n = n?.next;
            }
            n.next = end;
        }
    }

    public deleteNode(head: SinglyLinkedListNode<T>, data: T): SinglyLinkedListNode<T> {
        if (head == null) return null;

        let n: SinglyLinkedListNode<T> = head;

        if (n.data === data) {
            return head.next; // moved head
        }

        while (n.next != null) {
            if (n.next.data == data) {
                n.next = n.next.next;
                return head; // head didn't change
            }
            n = n.next;
        }
        return head;
    }
}

let singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList);
singlyLinkedList.appendToTail(1);
singlyLinkedList.appendToTail(10);
singlyLinkedList.appendToTail(11);
singlyLinkedList.appendToTail(111);
console.log(singlyLinkedList);
singlyLinkedList.deleteNode({ data: 111, next: null }, 111);
console.log(singlyLinkedList);
