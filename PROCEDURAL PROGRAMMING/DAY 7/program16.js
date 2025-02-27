// w . a p to print all number from 1-5 using for loop

for(i=1 ; i<=5 ; i++){
    console.log(i);
    
}


console.log('----------');
//w . a p to print numbers from 10-1 using for loop

for(i=10 ; i>=1 ; i--){
    console.log(i);
    
}

console.log('----------');

// w . a . p to print factorial of a given number using for loop

num = 5
fact = 1
for(i=1 ; i<=num ; i++ ){
    fact = fact * i
}
console.log(fact);

console.log('----------');
//w.a.p to create  a loop which have the potential to print 1- 10 numbers but print only 1 - 5

for(i=1 ; i<=10 ; i++){
    if(i>5){
       break  
    }
    console.log(i); 
}

console.log('----------');


//w . a .p to check a given number is prime or not
//-prime numbers only have factors as one and the number itself
//1 - neither prime or composite
//negative - not prime 
// positive - prime or composite

num = 5
count = 0
if(num>1){

    for(i=2 ; i<num ; i++){
        if(num%i==0){
            count++
            break
        }
    }
    console.log(count>0?'Not a prime':'prime');
    
}
else if(num == 1){
  console.log('Neither prime nor composite');
  
}
else{
    console.log('Not a prime');
    
}

console.log('----------');


// HW w . a . p to display all prime numbers between 1 - 50



for (i=2;i<=50;i++){ 
    flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag++
            break
        }
    }
    if(flag==0){
        console.log(i);
        
    }
}
console.log('------------------------------------------------------------');


//Hw w. a. p. to print all armstrong numbers between 8-500
//armstrong number => eg : = 153 = 1**3 + 5**3 + 3**3 = 153


for(i=8 ; i<=500 ; i++){
    sum = 0
    i = temp
    if(i>=8){
        d = i%10
    sum = sum + d**3
    i = Math.floor(i/10)
    }
    if(temp == sum){
        console.log(i);
        
    }
}

// num = 153
// sum = 0
// num=temp
// while (num>0) { //153>0? // 15>0?
//     d = num%10 // 153%10=3 // 15%10=5 //
//     sum = sum + d**3 //0 + 3**3 = 27 // 27 + 5**3
//     num = Math.floor(num/10) // 153/10=15.3 = 15 //15/10 = 1.5 = 1

// }
// if (temp == sum) {
//     console.log('Armstrong number');
    
// } else {
//     console.log('Not a Armstrong number');
    
// }



//w. a. p to display HCF of given two numbers
//eg 12 - 1 2 3 4 6 12
//   28 - 1 2 4 7 14 28
// cf - 1 2 4
//HCF - 4



// for(i=num1 ; i<=num1 ; i++){
//     for(j=1 ; j<=i ; j++){
//         if(i%j == 0){
            
//             console.log(j);  
//         }
         
//     }

//     for(k=num2 ; k<=num2 ; k++){
//         for(l=1 ; l<=k ; l++){
//             if(k%l == 0){
//                 console.log(l);  
//             }
             
//         }
//     }

//     if(j==l){

//     }

    
// }

num1 = 12
num2 = 28
hcf = 0
for(i=1 ; i<=num1 && i<=num2 ;i++){
    if(num1%i == 0 && num2%i == 0){
        hcf = i
    }
}
console.log(hcf);

//LCM





