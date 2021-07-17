type Container<T> = { value: T };

// Usage

const container1: Container<number> = { value: 100 };
console.dir({ container1 });

const person = { name: 'Matcus', born: 121, city: 'Rome' };
const container2: Container<Object> = { value: person };
console.dir({ container2 });