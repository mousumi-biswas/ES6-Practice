//objects are created by using same type of properties of a class

class Student {
  constructor(sId, sName) {
    //when object is instantiated, constructor method is invoked
    this.id = sId;
    this.name = sName;
    this.school = "dhanmondi school"; //default value pass na korleo peye jabe
  }
}
const student1 = new Student(1, "mou");
const student2 = new Student(2, "mahi");
//console.log(student1.name, student2);

const student3 = new Student(3, "sunny");
console.log(student3);
