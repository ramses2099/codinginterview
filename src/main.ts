import LinkedList from "./LinkedList";

const lst = new LinkedList<number>();
lst.put(1, 0);
lst.append(23);
lst.append(24);

// console.log(lst);
// lst.delete((d: number) => {
//   return d===24;
// });

console.log(lst);

const node = lst.search(24);
console.log(node);
