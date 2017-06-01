let person = {
	name: "Maciej",
	surname: "Zabek",
	age: 23,
	profession: "Programmer"
}

person[Symbol.iterator] = function *(){
	let properties = Object.keys(this);

	for (let p of properties){
		yield this[p];
	}
}

for (let properties of person) {
	console.log(properties);
}

let values = [...person];
console.log(values);
