import { Queue } from "./Queue";
import { expect, test } from "vitest";
const queue = new Queue();


test("isEmpty ", () => {
  expect(queue.isEmpty()).toEqual(true);
});

test("enqueue ", () => {
  queue.enqueue("juan");
  expect(queue.size()).toEqual(1);
});

test("peek ", () => {
  expect(queue.peek()).toBe("juan");
});
