// Callback function

function greet(name,callback){
    console.log(`HAI ${name}`);
    callback()
    
}
console.log('...........................................');

function A(){
    console.log("Iam a callback function");
    
}

greet("peter", A)

console.log('...........................................');

// Nested function

function A(){
    console.log("Inside function A");

    function B(){
        console.log("Inside function B");
        
    }
    B()
    
}
console.log('...........................................');

//Asynchoronous 

setTimeout(()=>{
    console.log("inside time out");
    
},5000)