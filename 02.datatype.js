const str1 = "안녕하세요. 반갑습니다.";

console.log(typeof str1, str1);

const num1 = 5;
console.log(typeof num1, num1);

const num2 = 1.8;
console.log(typeof num2, num2);

const bool1 = true;
console.log(typeof bool1, bool1);

const null1 = null;
console.log(typeof null1, null1);

let sample;
console.log(typeof sample, sample);

// Object
const obj1 = {
  a: 100,
  b: "hello world",
  c: function () {
    console.log("c");
  },
};
console.log(typeof obj1, obj1);
console.log("-----------");
console.log(obj1["a"]);
console.log(obj1.b);
obj1.c();

// Array
const array1 = ["a", "b", "c", "d"];
console.log(typeof array1, array1);
console.log(Array.isArray(array1));
console.log(Array.isArray(obj1));
