//Inheritance
class Parent {
  constructor() {
    this.fatherName = "Omar";
  }
}

class Child extends Parent {
  constructor(name) {
    super(); //Parent class constructor
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName;
  }
}
const child1 = new Child("Arnold");
const child2 = new Child("Tom");
console.log(child1);
console.log(child2);
console.log(child2.getFullName());
