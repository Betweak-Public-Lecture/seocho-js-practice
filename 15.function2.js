/**
 * 함수표현식
 */

const min = function (a, b) {
  return a < b ? a : b;
};
console.log(min(5, 9)); // 5
console.log(min(10, 54)); //10

const max = (a, b) => {
  return a < b ? b : a;
};

console.log("---max---");
console.log(max(5, 9)); // 9
console.log(max(10, 54)); // 54
