var Girls = ['Asia', 'Kasia', 'Ola', 'Jola'];
var Boys = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = Girls.concat(Boys);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}
console.log(allNames);