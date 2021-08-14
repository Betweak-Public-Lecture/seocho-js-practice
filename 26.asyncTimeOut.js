function run() {
  console.log("3초 후 실행됩니다");
  return 3;
}

console.log("시작");

const a = setTimeout(run, 3000);
console.log(a);
console.log("끝");

console.log("프로그램 시작");

for (let i = 0; i < 10000000; i++) {}
console.log("프로그램 종료");
