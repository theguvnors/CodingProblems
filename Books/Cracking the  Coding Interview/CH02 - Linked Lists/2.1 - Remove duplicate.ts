namespace RemoveDuplicates {
    class SinglyLinkedListNode<T> {
        public next: SinglyLinkedListNode<T> = null;

        constructor(public data: T) {}
    }

    class SinglyLinkedList<T> {
        public node: SinglyLinkedListNode<T>;

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
    singlyLinkedList.appendToTail(1);
    singlyLinkedList.appendToTail(10);
    singlyLinkedList.appendToTail(11);
    singlyLinkedList.appendToTail(111);
    singlyLinkedList.appendToTail(10);

    function removeDuplicates<T>(list: SinglyLinkedList<T>): SinglyLinkedList<T> {
        let listLength = 0;
        let valueToCompare: T;
        let currentNode: SinglyLinkedListNode<T> = list.node;

        valueToCompare = list.node.data;

        while (currentNode !== null) {
            //   console.log(currentNode, listLength);
            listLength++;
            if (valueToCompare === currentNode.data) {
                console.log('data match', currentNode.data, listLength);
            }
            currentNode = currentNode.next;
        }

        return list;
    }

    removeDuplicates(singlyLinkedList);
}
