const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// concat
const arr2 = arr1.concat([9, 10, 11]);
console.log("arr1", arr1);
console.log("arr2", arr2);

console.log("----");
// filter
const arr3 = arr1.filter(function (value, idx) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});
console.log("arr1", arr1);
console.log("arr3", arr3);
console.log("--------");
// map
const arr4 = arr1.map(function (value, idx) {
  return value * 10;
});
console.log("arr1", arr1);
console.log("arr4", arr4);
