function identity<T>(arg: T): T {
    return arg;
  }
  
  const strValue: string = identity("Hello, TypeScript!");
  const numValue: number = identity(42);
  
  console.log(strValue); // Saída: Hello, TypeScript!
  console.log(numValue); // Saída: 42
  