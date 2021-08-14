/**
 * callback방식
 */
console.log("프로그램 시작");

function task1(taskName, num, cb) {
  console.log(taskName, "시작");
  let result = num;
  setTimeout(() => {
    console.log(taskName, "종료");
    result += 10000;
    return cb(result);
  }, 5000);
}

function serial1() {
  task1("result1", -100000000, (result1) => {
    task1("result2", result1, (result2) => {
      console.log("result1->result2 완료", result2);
    });
  });
}

setImmediate(serial1);
console.log("serial1 비동기 작업 시작");

setImmediate(() => {
  task1("result3", -20000000, (result3) => {
    console.log("result3 완료", result3);
  });
});
console.log("result3 비동기 작업 시작");

// console.log("result1 시작");
// const result = task1(-100000000);
// console.log(result);
// // 다음 task
// console.log("result2 시작");
// const result2 = task1(result);
// console.log(result2);

// console.log("result3 시작");
// const result3 = task1(-20000000);

// console.log("프로그램 종료");
