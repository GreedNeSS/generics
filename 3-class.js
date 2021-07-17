'use strict';

const containerValue = Symbol('containerValue');

class Container {
	constructor(value) {
		Object.defineProperty(this, containerValue, {
			configurable: false,
			enumerable: false,
			writable: false,
			value
		});
	}

	getValue() {
		return this[containerValue];
	}
}

// Usage

const container = new Container(150);
console.dir({ container });
console.log('container.getValue() =', container.getValue());

{
	const person = { name: 'Marcus', born: 121, city: 'Roma' };
	const container = new Container(person);
	console.dir({ container });
	console.log('container.getValue() =', container.getValue());
}