//10- reduce - return a single value from the given array eg-sum,highest...
console.log('lowest----------------------------------------------');

expense =[12000,5000,60000,1200,50]

// lowest
lowest = expense.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);

console.log('highest----------------------------------------------');

// highest
highest = expense.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

console.log('sum----------------------------------------------');

// sum
sum = expense.reduce((n1,n2)=>n1+n2)
console.log(sum);


console.log("--------------------------------------------");

//11- filter - returns a new array with all elements statisfying the a particular condition
//print even num
a = [1,2,3,4,5,6]

even = a.filter((num)=>num%2==0)
console.log(even);

console.log("--------------------------------------------");

// w . a. p to print numbers greater than or equal to 4

numbers = a.filter((num)=>num>=4)
console.log(numbers);


console.log("--------------------------------------------");

//12- find - return first element satisfying a particular condition

even1 = a.find((num)=>num%2==0)
console.log(even1);

odd = a.find((num)=>num%2!=0)
console.log(odd);
