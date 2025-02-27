//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

console.log('1-------------------all product name--------------------');

products.forEach((prd) =>console.log(prd[1]));

console.log('2-------------------------product whose price < Rs.50-------------------');

//2. display product whose price < Rs.50
 products.filter((price)=>price[2]<50).forEach((prd)=>console.log(prd[1]))
 
 console.log('3------------------price of oreo-------------------');


//3. print price of oreo

oreo = products.find((price)=>price[1]=="oreo")
console.log(oreo[2]);

console.log('4-----------------costly product name-------------------');

//4. print costly product name

costly = products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(costly[2]);

console.log('5------------------------out of stock product-------------------');

//5. display out of stock product

stock= products.find((stk)=>stk[3]==0)
console.log(stock[1]);

console.log('6---------------------sort products based on stock in decsending order-------------------');

//6. sort products based on stock in decsending order

products.sort((stk1,stk2)=>stk2[3]-stk1[3]).forEach((item)=>console.log(item[1]))


console.log('7-------------------------product having maximum available stock-------------------');


//7. print product having maximum available stock

max = products.reduce((stk1,stk2)=>stk1[3]>stk2[3]?stk1:stk2)
console.log(max[1]);
;

console.log('8-------------------------is there any product can be purchased by Rs. 10------------------');

//8. is there any product can be purchased by Rs. 10


p= products.some((x)=>x[2]<10)
console.log(p?"yes":"no");



console.log('9------------------Is there any product in the range of 10 to 30-------------------');

//9. Is there any product in the range of 10 to 30
console.log(products.some((x1)=>10<x1[2]<30)
);

console.log('10---------------all products in the range of 10 to 30-------------------');

//10. print all products in the range of 10 to 30

products.filter((x1)=>10<x1[2]<30).forEach((item)=>console.log(item[1]))


console.log('--------------------');
