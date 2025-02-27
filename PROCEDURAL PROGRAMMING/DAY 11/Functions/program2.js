// Callback function

function greet(name,callback){
    console.log(`HAI ${name}`);
    callback()
    
}

function A(){
    console.log("Iam a callback function");
    
}

greet("peter", A)


// Nested function

function A(){
    console.log("Inside function A");

    function B(){
        console.log("Inside function B");
        
    }
    B()
    
}

//Asynchoronous 

setTimeout(()=>{
    console.log("inside time out");
    
},5000)