// Q. Write a program to swap between 2 given numbers
// num1 = 60
//  num2 = 40
// o/p => num1 = 40 and num 2 = 60

num1 = 60
num2 = 40
console.log(num1);
console.log(num2);


temp = num1
num1 = num2
num2 = temp

console.log(num1);
console.log(num2);

console.log('-----------');
// Another method

num1 = 60
num2 = 40

num1 = num1 + num2 // 60 + 40 = 100
num2 = num1 - num2 // 100 - 40 = 60
num1 = num1 - num2 // 100 - 60 = 40


console.log(`num1 is ${num1} and num2 is ${num2}`);







