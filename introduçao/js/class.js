"use strict";
// Definindo uma classe
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound(sound) {
        console.log(`${this.name} makes ${sound}!`);
    }
}
// Criando instâncias da classe Animal
let dog = new Animal("Dog");
dog.makeSound("Woof"); // Output: Dog makes Woof!
let cat = new Animal("Cat");
cat.makeSound("Meow"); // Output: Cat makes Meow!
