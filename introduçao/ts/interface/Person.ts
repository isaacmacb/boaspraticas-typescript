interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  
  const person: Person = {
    name: "Alice",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
  };
  
  person.greet(); // Saída: Hello, my name is Alice and I'm 30 years old.
  