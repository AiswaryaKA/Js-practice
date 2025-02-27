// splice

colours = ['red','blue','green','yellow','white']
console.log(colours);
console.log(colours.includes('green'));
console.log(colours.indexOf('green'));

console.log('-----------------------------------------------------------');

x = colours.slice(0,3)
console.log(x);

console.log('-----------------------------------------------------------');

y = colours.slice(-3)
console.log(y);

console.log('-----------------------------------------------------------');

colours.splice(1,1,'purple')
console.log(colours);

console.log('-----------------------------------------------------------');


colours.splice(1,1)
console.log(colours);

console.log('-----------------------------------------------------------');


colours.splice(3,1)
console.log(colours);

console.log('-----------------------------------------------------------');


colours.splice(-2,1)
console.log(colours);
console.log('-----------------------------------------------------------');




