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

//2 24 3 369 4 4936
input=3
i=1
str=''
while (i<=input) {
    str=str+i
    i++
   
    
}
console.log(str*input);

//2+22=24 // 3+33+333=369 //4+44+444+4444=4936

input = 3
i = 1
sum = 0
str=''
while (i<=input) {
    str=str+input 
     sum=sum+Number(str)
     //console.log(sum);
     i++
}


//1234 4321
x=56893
sum=0
i=1
while (i<=5) {
    d=x%10
    // console.log(`${d} d`);
     sum=sum*10+d
     x=(x-d)/10
    i++
    
}
console.log(sum);



// w . a . p to check a given 3-digit number is armstrong or not
//eg : = 153 = 1**3 + 5**3 + 3**3 = 153

// 

num = 153
sum = 0
temp=num
while (num>0) { //153>0? // 15>0?
    d = num%10 // 153%10=3 // 15%10=5 //
    sum = sum + d**3 //0 + 3**3 = 27 // 27 + 5**3
    num = Math.floor(num/10) // 153/10=15.3 = 15 //15/10 = 1.5 = 1

}
if (temp == sum) {
    console.log('Armstrong number');
    
} else {
    console.log('Not a Armstrong number');
    
}

