//Array operations adv

//8- foreach - access each items from a given array
//syntax - array.forEach(callback{})


console.log('forEach----------------------------------------------');

a = [1,4,2,14,25]
//  w . p . to find the square of each elements in the given array

a.forEach(num => {
    console.log(num**2);   
});
console.log('map----------------------------------------------');

//9- map() - used to acess each element from a given array and return a new array with same no of elements that of parent array

sq=a.map((num)=>num**2)
console.log(sq);

console.log('map----------------------------------------------');

// w . a p to find the cube of given array using map
cube = a.map((num)=>num**3)
console.log(cube);

// w . a p to return a new array with elements with following conditions
// if the parent array contains elements greater than equal to 13  decrement with 1
// if the parrent array contains elements less than 13 increment with 1
// a=[10,11,12,13,14]  o/p =[11,12,13,12,13]

console.log('map----------------------------------------------');

a=[10,11,12,13,14]
// b = a.map((num)=>num>=13?num-1:num+1)
// console.log(b);

    b = a.map((n)=>n>=13?n-1:n+1)
    console.log(b);
    