console.log("프로그램 시작");
function fastFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // 성공     =>resolve
      // 에러발생 => reject
      resolve(data * 2);
    }, 1000);
  });
}
function slowFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(data + 10);
    }, 3000);
  });
}

// function slowFunction(err, data, done) {
//   setTimeout(function () {
//     done(undefined, data + 10);
//   }, 3000);
// }

function runTask() {
  return fastFunction(10)
    .then((data) => {
      console.log("fastFunction 결과");
      console.log(data);
      return slowFunction(data);
    })
    .then((data) => {
      console.log("slowFunction 결과");
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

runTask();

// function runTasks(callback) {
//   fastFunction(undefined, 10, (err, data) => {
//     if (err) return callback(err);
//     console.log("fastFunction", data);

//     slowFunction(undefined, data, (err, data) => {
//       if (err) return callback(err);
//       console.log("slowFunction", data);
//     });
//   });
// }

// runTasks((err) => {
//   console.error(err);
// });

console.log("프로그램 종료");
