export type TFunction<T, R> = (t: T) => R;
export interface INode<T> {
    value: T;
    next?: INode<T>;
}
export class WebExampleLinkedList<T> {
    private head: INode<T> = null;
    private tail: INode<T> = null;
    private EMPTY_NODE: INode<T> = { value: null, next: null };

    public append(value: T): WebExampleLinkedList<T> {
        const node = this.forgeNode(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.appendToTheEndOfTheList(node);
        return this;
    }

    private forgeNode(value: T): INode<T> {
        return { value, next: null };
    }

    public isEmpty(): boolean {
        return !this.head;
    }

    private appendToTheEndOfTheList(node: INode<T>) {
        this.tail.next = node;
        this.tail = node;
    }

    public *items() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    public delete(value: T): boolean {
        let deleted: boolean = false;
        if (this.isEmpty()) {
            return deleted;
        }

        deleted = this.deleteFromHead(value);

        let current = this.head || this.EMPTY_NODE;
        while (current.next) {
            if (current.next.value === value) {
                deleted = true;
                current = current.next.next;
            } else {
                current = current.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = current;
        }

        return deleted;
    }

    private deleteFromHead(value: T): boolean {
        let deleted: boolean = false;
        while (this.head && this.head.value === value) {
            deleted = true;
            this.head = this.head.next;
        }
        return deleted;
    }

    public find(compare: TFunction<T, boolean>): INode<T> {
        if (this.isEmpty()) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (compare(node.value)) {
                return node;
            }
            node = node.next;
        }

        return null;
    }

    public insert(value: T): WebExampleLinkedList<T> {
        const node = this.forgeNode(value);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }
}
