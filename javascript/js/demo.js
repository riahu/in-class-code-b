//alert('Hello Class!');
/* this is a block comment */

function updateClock() {
	var elem = document.getElementById('clock');
	elem.innerHTML = new Date().toLocaleTimeString();
}

window.setInterval(updateClock, 1000);

var x = 'Hello';
var y = 'World';
var z = x + ' ' + y;
console.log(z);

var b = true;
var b2 = false;
if (b && b2) {
	alert('b is true');
}

var obj = {};
obj.a = 'foo';
obj.g = 5.678;
obj.m = function(){
	this.a = 'bar';
};

obj.m();

console.log(obj.a);

var arr = ['Matt','Julie','Ann','Chris'];

arr.push('Nancy');
arr[5] = 'Henry';

arr.sort();

for (var idx = 0; idx < arr.length; ++idx) {
	console.log(arr[idx]);
}

var a2 = [
	{fname: 'Frank', lname: 'Jones'},
	{fname: 'Betsy', lname: 'Johnson'},
	{fname: 'Ann', lname: 'Lee'}
];

function compareNames(a, b) {
	return a.lname.localeCompare(b.lname);
}

a2.sort(compareNames);
console.log(a2);