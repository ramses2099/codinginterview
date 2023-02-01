/**
 * Node List
 */

class NodeList<T> {
  _next: NodeList<T>;
  _data: T;
  constructor(data: T) {
    this._data = data;
  }
}
/**
 * Linked List
 */
export default class LinkedList<T> {
  private _head: NodeList<T>;
  private _size: number = 0;

  constructor() {}

  private comparator(a: T, b: T): boolean {
    return a === b;
  }

  append(data: T): void {
    if (!this._head) {
      this._head = new NodeList<T>(data);
      this._size++;
      return;
    }

    let current: NodeList<T> = this._head;
    while (current._next) {
      current = current._next;
    }

    current._next = new NodeList<T>(data);
    this._size++;
  }

  preappend(data: T): void {
    const newHead = new NodeList<T>(data);
    newHead._next = this._head;
    this._head = newHead;
    this._size++;
  }

  put(data: T, pos: number): void {
    let i: number = 1;
    if (this._size < pos) throw "Error";
    else if (!this._head) {
      this._head = new NodeList<T>(data);
      return;
    } else if (pos === 0) {
      this.preappend(data);
      return;
    }

    let current: NodeList<T> = this._head;
    while (current._next) {
      if (i === pos) {
        const node = new NodeList<T>(data);
        node._next = current._next;
        current._next = node;
        this._size++;
        break;
      }
      current = current._next;
      i++;
    }
  }

  delete(cb: (data: T) => boolean): void {
    if (!this._head) return;
    if (cb(this._head._data)) {
      this._head = this._head._next;
      this._size--;
      return;
    }
    let current: NodeList<T> = this._head;
    while (current._next) {
      if (cb(current._next._data)) {
        current._next = current._next._next;
        this._size--;
        return;
      }
      current = current._next;
    }
  }

  search(data: T): NodeList<T> | null {
    let current = this._head;
    while (current) {
      if (this.comparator(current._data, data)) {
        return current;
      }
      current = current._next;
    }
    return null;
  }
}
