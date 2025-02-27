// reduce

expense =[12000,5000,60000,1200,50]

// lowest
lowest = expense.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);

// highest
highest = expense.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

// sum
sum = expense.reduce((n1,n2)=>n1+n2)
console.log(sum);


console.log("--------------------------------------------");

// filter

a = [1,2,3,4,5,6]

even = a.filter((num)=>num%2==0)
console.log(even);

console.log("--------------------------------------------");

// w . a. p to print numbers greater than or equal to 4

numbers = a.filter((num)=>num>=4)
console.log(numbers);


console.log("--------------------------------------------");

// find

even1 = a.find((num)=>num%2==0)
console.log(even1);