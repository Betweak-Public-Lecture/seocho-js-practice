/**
 * 함수표현식의 응용
 */
let func;

const funcName = "min";

if (funcName === "max") {
  func = function (a, b) {
    // max 함수
    return a > b ? a : b;
  };
} else if (funcName == "min") {
  func = (a, b) => {
    return a > b ? b : a;
  };
}

console.log(func(1, 3));
