// Definindo uma interface
interface Person {
    name: string;
    age: number;
  }
  
  // Usando a interface em uma função
  function greet(person: Person): string {
    return `Olá, ${person.name}! Você tem ${person.age} anos.`;
  }
  
  let personInfo = { name: "Ana", age: 25 };
  console.log(greet(personInfo)); // Output: Olá, Ana! Você tem 25 anos.
  