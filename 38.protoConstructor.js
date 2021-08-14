function Animal(name) {
  this.name = name;
  this.run = function () {
    console.log(`${this.name} 동물이 달린다.`);
  };
  this.run2 = function () {
    console.log("동물이 달려요");
  };
}

// const animal = {
//   name: "lion",
//   run() {
//     console.log(`${this.name} 동물이 달린다.`);
//   },
//   run2: function () {
//     console.log("동물이 달려요.");
//   },
// };

const animal1 = new Animal("lion");
const animal2 = new Animal("rabbit");

animal1.run();
animal2.run();

animal1.run2();
animal2.run2();

console.log("----------");
console.log(animal1);
console.log(animal2);
console.log(animal1.constructor);
console.log("-----------");

Animal.prototype.eat = function () {
  console.log(`${this.name}이(가) 밥을 먹는다.`);
};

animal1.eat();
animal2.eat();

console.log(animal1.__proto__);
console.log(animal2.__proto__);
console.log(animal1.__proto__ === animal2.__proto__);
