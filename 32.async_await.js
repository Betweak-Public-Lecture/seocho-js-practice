const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fastFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = data * 2;
      console.log("Fast Function done", result);
      //   reject(new Error("임시 에러"));
      resolve(result);
    }, 1000);
  });
}

async function slowFunction(data) {
  await delay(3000);
  const result = data + 10;
  console.log("slow Function done", result);
  return result;
}

async function runTasks() {
  let result = await fastFunction(10);
  result = await slowFunction(result);

  console.log("작업완료", result);
}
const a = runTasks();
console.log(a);
// function runTasks() {
//   fastFunction(10)
//     .then((result) => {
//       return slowFunction(result);
//     })
//     .then((result) => {
//       console.log("작업완료", result);
//     });
// }
