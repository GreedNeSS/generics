'use strict';

const sum = (a, b) => a + b;

console.dir(sum(1, 2));
console.dir(sum(1, '2'));
console.dir(sum('1', 2));
console.dir(sum('1', '2'));
console.dir(sum(true, true));
console.dir(sum(true, false));
console.dir(sum(false, false));
console.dir(sum(1.5, 2));
console.dir(sum('1.5', '2'));