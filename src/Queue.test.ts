import { Queue } from "./Queue";
import { expect, test } from "vitest";
const queue = new Queue();

queue.enqueue("juan");
queue.enqueue("juan carlos");
queue.enqueue("oriana");

// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());

// console.log(queue.size());
// console.log(queue.isEmpty());

test("peek ", () => {
  expect(queue.peek()).toBe("juan");
});
