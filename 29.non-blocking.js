console.log("프로그램 시작");
const fs = require("fs");
const data = fs.readFile("./sample.txt", (err, data) => {
  console.log("파일 읽기 완료", data);
});

console.log("프로그램 진행", data);

console.log("프로그램 종료");
