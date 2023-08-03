interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  
  class Student implements Person {
    constructor(public name: string, public age: number) {}
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const student: Person = new Student("Alice", 20);
  student.greet(); // Saída: Hello, my name is Alice and I'm 20 years old.
  