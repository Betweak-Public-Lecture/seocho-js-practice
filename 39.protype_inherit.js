function Animal(name) {
  this.name = name;
  this.run = function () {
    console.log(`${this.name} 동물이 달린다.`);
  };
  this.run2 = function () {
    console.log("동물이 달려요");
  };
}

Animal.prototype.eat = function () {
  console.log(`${this.name}이(가) 밥을 먹는다.`);
};

function Rabbit(name, color) {
  Animal.apply(this, arguments);
  this.color = color;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

const rabbit1 = new Rabbit("토끼", "white");

rabbit1.run();
rabbit1.eat();
console.log(rabbit1);
console.log(rabbit1.__proto__);
