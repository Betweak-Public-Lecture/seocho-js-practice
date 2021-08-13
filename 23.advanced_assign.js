let arr1 = ["Kim", "Shin", "Youn"];

const [name1, name2, name3] = arr1;
console.log(name1);
console.log(name2);
console.log(name3);
// ---
console.log("----");
let arr2 = ["a", "b", "c", "d", "e"];
const [k1, k2, ...restArr] = arr2;

console.log(k1);
console.log(k2);
console.log(restArr);

console.log("----");

const options = {
  title: "메뉴",
  width: 300,
  height: 200,
  k1: "v1",
  k2: "v2",
};
const { title, height: h, ...rest } = options;
console.log(title);
console.log(h);
console.log(rest);
