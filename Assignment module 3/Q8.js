class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
  }
  //example no 1
  const person1 = new Person("Ichigo", 17);
  person1.introduce();
  //example no 2
  const student1 = new Student("Linus", 23, "Computer Science");
  student1.introduce();