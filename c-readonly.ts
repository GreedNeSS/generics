type Person = {
	name: string,
	born: number,
	city: string,
};

const person: Readonly<Person> = {
	name: 'Marcus',
	born: 121,
	city: 'Rome',
};

person.name = 'Marcus Aurelius';

console.dir(person);