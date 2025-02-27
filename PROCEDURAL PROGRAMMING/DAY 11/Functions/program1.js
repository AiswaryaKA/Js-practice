// write a program to find a given number is odd or even using a function 


function display(num){
    if(num%2==0){
        console.log("Even number");
        
    }else{
        console.log("Odd number");
        
    }
}

display(2)


// ANother method

function oe(num){
    return num%2==0? "even":"odd"
}
console.log(oe(5));


// write a program to find a given number is positive or negative using a function

function number(n){
    if(n>0){
        console.log("Positive number");
        
    }else if(n==0){
        console.log("Negative number");
        

    }else{
        console.log("Given number is zero");
        
    }
}

number(5)

// Another Method

function pn(num){
    return num>0?"positive":num==0?"neither positive nor negative":"negative"
}
console.log(pn(33));


// W. a. p find the cube of given number using function.
function cube(i){
     cb = i**3
     console.log(cb);
     
}
cube(2)

// Another Method

function cube(num){
    return num**3
}
console.log(cube(10));



// write a p to find the sum of 2 numbers

const sum = (num1,num2)=>num1 + num2
console.log(sum(2,3));   
    

// cube

const cube1 = (n1,)=>n1**3
console.log(cube1(2));


// positive or negative