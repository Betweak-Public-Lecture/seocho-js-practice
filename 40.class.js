class Animal {
  constructor(name = "lion") {
    this.name = name;
  }
  run() {
    console.log(`${this.name} 동물이 달린다.`);
  }
  eat() {
    console.log(`${this.name}이(가) 먹는다.`);
  }
}

const animal = new Animal("사자");
console.log(animal);
animal.run();
animal.eat();

console.log("-----------");

class Rabbit extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  newFunction() {
    console.log(`${this.name} 이(가) 새로운 기능을 가졌다!`);
  }
}

const rabbit = new Rabbit("토끼", "white");
console.log(rabbit);
rabbit.eat();
rabbit.run();
rabbit.newFunction();
