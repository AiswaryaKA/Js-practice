// w . a p . to display the greatest among the two given numbers
//  num1 = 100
//  num2 = 200

num1 = 100
num2 = 200
if(num1>num2){
    console.log(`${num1} is greater`);
    
}
else if(num2>num1){
    console.log(`${num2} is greater`);
    
} else {
    console.log('Both numbers are equal');

}

console.log('-----------');

// w . a p to display the largest nummber among 3 given numbers

n1 = 100
n2 = 200
n3 = 300

if(n1>n2 && n1>n3){
    console.log(`${n1} is greater`);
    
}else if(n2>n1 && n2>n3){
    console.log(`${n2} is greater`);
    
}else if(n3>n1 && n3>n2){
    console.log(`${n3} is greater`);
    
}

else{
    console.log(`Equal`);
    
}




// w . a .p to display the second largest number arrange the 3 numbers in desending order


n1 = 100
n2 = 200
n3 = 300

if(n1>n2 && n1>n3){
    if(n2>n3){
        console.log('Second largest number is' , n2);
        console.log(`Descending order ${n1}>${n2}>${n3}`);   
    }else{
        console.log('Second largest number is' , n3);
        console.log(`Descending order ${n1}>${n3}>${n2}`);       
    }
    
}else if(n2>n1 && n2>n3){
    if(n1>n3){
        console.log('second largest number is' , n1);
        console.log(`Descending order ${n2}>${n1}>${n3}`); 
    }else{
        console.log('second largest number is' , n3);
        console.log(`Descending order ${n2}>${n1}>${n3}`);
    }
    
}else if(n3>n1 && n3>n2){
    if(n1>n2){
        console.log('second largest number is' , n1);
        console.log(`Descending order ${n3}>${n1}>${n2}`); 
    }else{
        console.log('second largest number is' , n2);
        console.log(`Descending order ${n1}>${n2}>${n3}`);
    }
    
}

else{
    console.log(`Equal`);
    
}

