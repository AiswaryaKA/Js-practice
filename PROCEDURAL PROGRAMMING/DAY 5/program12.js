// w . a .p to dispaly 'fizz' when a number is divisible by 3 , 'Buzz' when the number is divisible by 5 and 'FizzBuzz' when it is divisible by 15

num =  5

if(num!=0){
    if(num%15==0){
        console.log('FizzBuzz');
        
    }else if(num%5==0){
        console.log('Buzz');
    }else if(num%5==0){
        console.log('Fizz');
    }
    else {
        console.log('Not Divisble');
    }
}