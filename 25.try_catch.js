/**
 * JSON Handling
 */
const json1 = '{"k1": "v2", "k2": [1,2,3], "k3": 10}';
const obj1 = JSON.parse(json1);
console.log(obj1);

const KEY = "SAMPLE_KEY";
const johnProfile = {
  name: "John", //속성
  age: 14,
  [KEY]: "sampleValue",
  frineds: ["younsoo", "minsoo"],
};
console.log(JSON.stringify(johnProfile));

console.log("-----");
// try catch

const json2 = "abc";
try {
  JSON.parse(json2);
} catch (error) {
  console.error(error);
  console.log("Error발생!");
}

console.log("-----");
try {
  console.log("try3");
  throw SyntaxError("오류발생시켰습니다.");
} catch (error) {
  console.log("Error발생3!");
} finally {
  console.log("Finally!3");
}

console.log("프로그램 종료!");
