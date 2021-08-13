/**
 * 함수 선언식과 함수 표현식의 차이
 * 함수 선언: 선언되어 있으면 어디서든 호출이 가능하다.
 * 함수 표현: 표현된 코드가 실행되기 전까지는 호출이 불가능.
 */

// 함수선언
console.log(min(1, 3)); // 호출 가능

function min(a, b) {
  return a < b ? a : b;
}

// console.log(max(7, 3)); // 에러 발생
console.log(max2(5, 85)); // 에러 발생

// 함수 표현식
const max = function (a, b) {
  return a > b ? a : b;
};

const max2 = (a, b) => {
  return a > b ? a : b;
};

console.log(max(10, 5)); // 호출 가능
console.log(max2(5, 7)); // 호출 가능
