const age = "abc";

const message =
  age < 3
    ? "아기야 반가워"
    : age < 10
    ? "안녕 반가워!"
    : age < 100
    ? "안녕하세요. 반갑습니다."
    : "나이가 많으시거나 숫자가 아닌 값이 입력되었군요.";

console.log(message);
