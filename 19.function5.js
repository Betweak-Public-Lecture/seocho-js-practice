/**
 * 함수 표현식 차이
 * const funcName = function(){}
 * const funcName = (a,b)=>{}
 */

const obj1 = {
  name: "신윤수",
  sleep: function () {
    console.log(this.name, "가(이가) 잠을 잡니다.");
  },
  eat: () => {
    // this: prototype
    console.log(this.name, "가(이가) 밥을 먹습니다.");
  },
};

// console.log(obj1.name);
obj1.sleep();
obj1.eat();

const obj2 = {
  name: "하늬",
  friendSleep: obj1.sleep.bind(obj1),
};

obj2.friendSleep();
