// w . a p to dispaly all even numbers between 1 - 50

i = 2
while(i<=50){
    if(i%2==0){
        console.log(`${i} is a even number`);
        
    }
    i++
    
}

console.log('---------------');


// w . a p to dispaly all odd numbers between 1 - 50

i = 2
while(i<=50){
    if(i%2!=0){
        console.log(`${i} is a odd number`);
        
    }
    i++
    
}

console.log('---------------');

// w a p to find the sum of all numbers between 1 - 10

k = 1
sum = 0
while(k<=10){
    sum = sum + k
    k++      
}
console.log(sum);

console.log('---------------');


// w a p to find the sum of all even numbers between 1 - 10

k = 1
sum = 0
while(k<=10){
    if(k%2==0){
        sum = sum + k     
    } 
    k++  
}
console.log(sum);

console.log('---------------');


// w a p to find the sum of all odd numbers between 1 - 10

k = 1
sum = 0
while(k<=10){
    if(k%2!=0){
        sum = sum + k    
    } 
    k++  
}
console.log(sum);

console.log('---------------');

// input = 2  3  4
// output = 24 369 4936
// 24/2=12// 369/3=123 // 4936/4=1234
// 12*2=24 // 123*3=369 // 1234*4=4936

input = 2
i = 1
str = ''
while(i<=input){ //1<=2 // 2<=2 // 3<=2

    str = str + i //''+1 = '1' // '1'+2 = '12'
   // console.log(str);
    i++ //2 //3
    
}
console.log(str*input); //'12'*2=24


console.log('---------------');
//Another Method

input = 3
i = 1
num = 0
while(i<=input){  //1<=3? //2<=3?
    num = num *10+i //0*10+1=11 //11*10+2=132
    i++ //2 //3
}

console.log(num*input);

// 2+22 // 3+33+333 // 4+44+444+4444

input = 3
i = 1
str = ''
sum = 0
while(i<=input){ //1<=3 // 2<=3 // 3<= 3 // 4!<=3
    str = str+input //''+3 ='3' //'3' + 3 = '33' // '33' + 3 = '333'
    console.log(str);
    sum = sum + Number(str) //0+3 = 3+33 = 36 // 36 +333 = 369
    i++   
}
console.log(sum);


console.log('---------');



// w . a. to display the reverse of a given number 
// eg. 123 o/p =321

x=56893
sum=0
i=1
while (x>0) {
    d=x%10
    // console.log(`${d} d`);
     sum=sum*10+d
     x=(x-d)/10
    //i++
    
}
console.log(sum);


console.log('---------');


//another method
//12/10 = 2 q 1.2 r
//Math.floor(1.2) - 1 parseInt

num = 123
rev = 0
while (num > 0) { //123>0
    lastDigit = num%10 //123/10
    rev = rev * 10 + lastDigit //0*10+3
    num = parseInt(num/10) //parseInt to remove decimal point //Also Math.floor
}
console.log(rev);





