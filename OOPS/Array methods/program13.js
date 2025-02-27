//14 - splice - remove and add items of an array at different location
//syntax- splice(startindex,deletecount,items)

colours = ['red','blue','green','yellow','white']
console.log(colours);
console.log('includes-----------------------------------------------------------');

//15- includes() - return boolean value based on item
console.log(colours.includes('green'));

console.log('indexOf-----------------------------------------------------------');

//16- indexOf()- gives index of a particular item
console.log(colours.indexOf('green'));

console.log('slice-----------------------------------------------------------');

// 17 - slice() - create a sub array
//syntax - slice (startindex,endindex)
x = colours.slice(0,3)
console.log(x);

console.log('slice-----------------------------------------------------------');

y = colours.slice(-3)
console.log(y);


//14 - splice - remove and add items of an array at different location
//syntax- splice(startindex,deletecount,items)

console.log('splice-----------------------------------------------------------');

colours.splice(1,1,'purple')
console.log(colours);

console.log('splice-----------------------------------------------------------');


colours.splice(1,1)
console.log(colours);

console.log('splice-----------------------------------------------------------');


colours.splice(3,1)
console.log(colours);

console.log('splice negative-----------------------------------------------------------');


colours.splice(-2,1)
console.log(colours);
console.log('-----------------------------------------------------------');




