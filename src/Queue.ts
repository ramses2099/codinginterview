/**
 * Implement Queue using TypeScript
 *
 * FIFO = First in First Out
 *
 * [1,2,3,4]
 */

export class Queue {
  private items: Record<string, any>;
  private head: number;
  private tail: number;

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item: any): void {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue(): any {
    if (this.isEmpty()) {
      return null;
    }

    const firstItem = this.peek();
    delete this.items[this.head];
    this.head++;
    return firstItem;
  }

  peek(): any {
    return this.items[this.head];
  }

  size(): number {
    return this.tail - this.head;
  }

  isEmpty(): boolean {
    return this.size() ? false : true;
  }

  clear(): void {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}
