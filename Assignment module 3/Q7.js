class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
  }
  // example no 1
  const animal = new Animal("Wolf", "Howl");
  animal.makeSound();
  //example no 2
  const dog = new Dog("Buddy", "Woof");
  dog.makeSound();
  dog.fetch();