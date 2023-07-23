// Definindo uma classe
class Animal {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
    
    makeSound(sound: string): void {
      console.log(`${this.name} makes ${sound}!`);
    }
  }
  
  // Criando instâncias da classe Animal
  let dog: Animal = new Animal("Dog");
  dog.makeSound("Woof"); // Output: Dog makes Woof!
  
  let cat: Animal = new Animal("Cat");
  cat.makeSound("Meow"); // Output: Cat makes Meow!
  