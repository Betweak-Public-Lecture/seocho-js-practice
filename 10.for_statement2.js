// for in

const obj1 = {
  a: 1,
  b: "B",
  c: function () {
    console.log("obj1.c호출");
    return "C";
  },
  d: {
    d_a: "D_A",
  },
};

for (let item in obj1) {
  console.log(item);
  console.log(obj1[item]);
  console.log("--------");
}

console.log("배열에서 for in");
const arr1 = ["a", "b", "c", "d", "e"];
for (let item in arr1) {
  console.log(item);
  console.log(arr1[item]);
  console.log("--------");
}
