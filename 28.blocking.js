/**
 * blocking
 */
console.log("프로그램 시작");
const fs = require("fs");
const data = fs.readFileSync("./sample.txt");
console.log(data);

console.log("프로그램 종료");
