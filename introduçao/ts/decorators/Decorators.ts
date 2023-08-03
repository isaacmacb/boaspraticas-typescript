function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with args: ${args}`);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}

class MyClass {
  @logMethod
  greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
}

const instance = new MyClass();
instance.greet("Alice");
// Saída:
// Calling method greet with args: Alice
// Hello, Alice!
