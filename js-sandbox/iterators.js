let person = {
	name: 'Maciej',
	surname: 'Zabek',
	age: 23,
	profession: 'Programmer'
};

person[Symbol.iterator] = function () {
	let properties = Object.keys(this);
	let count = 0;
	let isDone = false;

	let next = () => {
		if (count >= properties.length) isDone = true;
		return { done: isDone, value: this[properties[count++]] };
	};

	return { next };
};

for (let properties of person) {
	console.log(properties);
}

let values = [...person];
console.log(values);
