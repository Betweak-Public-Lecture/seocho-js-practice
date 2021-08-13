// const message = "OOO님 메시지가 도착했습니다. OOO님 확인하세요.";

const arr1 = ["신윤수", "김민수", "이은영"];

const sample = "신윤수";
const message = `${sample}님 메시지가 도착했습니다. ${sample}님 확인하세요`;
console.log(message);

console.log("----");
for (let item of arr1) {
  const message = `${item}님 메시지가 도착했습니다. ${item}님 확인하세요`;
  console.log(message);
}
