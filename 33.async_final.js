console.log("프로그램 시작");

function task1(num) {
  let result = num;
  for (let i = 0; i < 10 ** 9; i++) {
    if (i % 10 ** 8 === 0) {
      //   console.log('.')
      process.stdout.write(".");
      result = result + i;
    }
  }
  process.stdout.write("\n");
  return result;
}
console.log("result1 시작");
const result = task1(-100000000);
console.log(result);
// 다음 task
console.log("result2 시작");
const result2 = task1(result);
console.log(result2);

console.log("result3 시작");
const result3 = task1(-20000000);

console.log("프로그램 종료");
