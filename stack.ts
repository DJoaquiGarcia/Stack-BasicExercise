class node<T> {
  value: T;
  next: node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  private top: node<T> | null = null;

  push(value: T): void {
    const newNode = new node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): T | null {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  getSize(): number {
    let size = 0;
    let current = this.top;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  peek(): T | null {
    return this.top ? this.top.value : null;
  }
}

const studentStack = new Stack<string>();
studentStack.push("Javier");
studentStack.push("Fernanda");
studentStack.push("Paola");
studentStack.push("Julian");

console.log("Size:", studentStack.getSize());
console.log("Top element:", studentStack.peek());

const removedStudent = studentStack.pop();
console.log("Removed element:", removedStudent);
console.log("Size after pop:", studentStack.getSize());
console.log("Top element after pop:", studentStack.peek());

    