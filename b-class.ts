class Container<T> {
	// private value: T;
	public value: T;
	constructor(value: T) {
		this.value = value;
	}

	getValue(): T {
		return this.value;
	}
}

// Usage

const container1 = new Container(150);
console.dir({ container1 });
// container1.value = 100;
console.log('container1.getValue() =', container1.getValue());

const person = { name: 'Marcus', born: 121, city: 'Rome' };
const book = { name: 'TS', author: 'Marcus' };
const container2 = new Container(person);
console.dir({ container2 });
container2.value = book;
console.log('container2.getValue() =', container2.getValue());