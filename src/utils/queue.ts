class Node {
  private _value: any;

  private _next: Node | null;

  constructor(value: any) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  get next() {
    return this._next;
  }

  set next(next: any) {
    this._next = next;
  }
}

class Queue {
  constructor(
    private front: Node | null = null,
    private back: Node | null = null,
  ) {}

  isEmpty() {
    return !this.front;
  }

  enqueue(value: any) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.back = node;

      return;
    }

    (this.back as Node).next = node;
    this.back = node;
  }

  dequeue() {
    const node = this.front;

    if (!this.isEmpty()) {
      this.front = this.front?.next;
    }

    if (!this.front) {
      this.back = null;
    }

    return node;
  }

  getQueue() {
    if (this.isEmpty()) {
      return [];
    }

    const tempArr = [];

    let temp = this.front;

    while (temp) {
      tempArr.push(temp.value);

      temp = temp.next;
    }

    return tempArr;
  }
}

export default Queue;
