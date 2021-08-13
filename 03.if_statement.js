function sample(num1) {
  if (typeof num1 !== "number") {
    console.log("숫자가 입력되어야 합니다.");
    return;
  }
  if (num1 > 10) {
    console.log("num1은 10보다 큽니다.");
  } else if (num1 < 10) {
    console.log("num1은 10보다 작습니다.");
  } else {
    console.log("num1은 10입니다.");
  }
}

sample(null);
sample(10);
sample(8);
sample(11);
