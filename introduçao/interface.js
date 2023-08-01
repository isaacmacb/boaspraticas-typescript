"use strict";
// Usando a interface em uma função
function greet(person) {
    return `Olá, ${person.name}! Você tem ${person.age} anos.`;
}
let personInfo = { name: "Ana", age: 25 };
console.log(greet(personInfo)); // Output: Olá, Ana! Você tem 25 anos.
