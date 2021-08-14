function fastFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("fastFunction실행");
      // 성공     =>resolve
      // 에러발생 => reject
      resolve(data * 2);
    }, 1000);
  });
}
function slowFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("SlowFunc실행");
      resolve(data + 10);
    }, 3000);
  });
}

function runTask() {
  return Promise.all([fastFunction(5), slowFunction(20)]).then(
    ([result1, result2]) => {
      console.log("작업완료", result1, result2);
    }
  );
}
runTask();
