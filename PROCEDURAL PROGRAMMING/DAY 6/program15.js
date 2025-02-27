// w . a .p to check whether a given number is palindrome or not 
// eg: 121 = 121 => palindrome

num = 123
temp = num
rev = 0
while (num>0) {
   d = num % 10
   rev = rev * 10 + d //
   num = parseInt(num/10)   
}
if (temp == rev) {
    console.log('Palindrome');
    
} else {
    console.log('Not a Palindrome');
    
}

console.log('-----------');

//w . a p to print factorial of agiven number
//eg: 4! = 1*2*3*4

num = 4
i = 1
fact = 1
while (i<=num) { //1<=4 //2<=4
    fact = fact * i //1*1 = 1 //1*2=3
    i++ //2//3
   
}
console.log(fact);


// w . a . p to check a given 3-digit number is armstrong or not
//eg : = 153 = 1**3 + 5**3 + 3**3 = 153

// 

num = 153
sum = 0
num=temp
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
    
    

console.log('-----------');

// w . a p to display numbers whose exponential is in the given range 8 - 36
//User can input the power to find the exponential for a particular number
//2
//1**2 = 1 // 2**2 = 4 // 3**2 = 9 // 4**2 = 16 // 5**2 = 25 // 6**2 = 36 => 3 4 5 6
//3
//1 8 27 64 125

power = 2
i = 1 
value = 0

while (value<=36) { 
    value = i ** power
   // console.log(value);
   if(value<=36 && value>=8){
    console.log(i); 
   }
    i++       
}

//another method 

power = 2
num = 1
while (num<=36) {
    if (8<=num**power && num**power<=36) {
        console.log(num);
        
    }
    if(num**power>=36){
        break
    }
}




