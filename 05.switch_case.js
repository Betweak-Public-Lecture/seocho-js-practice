let char1 = "b";

switch (char1) {
  case "a":
    console.log("a입니다.");
    break;
  case "b":
    console.log("B입니다");
    break;
  case "c":
  case "d":
    console.log("c이거나 d입니다.");
    break;
  default:
    console.log("a~d안에 속하지 않습니다.");
}
