// NESTED ARRAY/

arr=[[1,2],[3,4],[5,6]]
sum = 0
for(let a of arr){
    console.log(a);
    
    for(let x of a){
        console.log(x);
        
    }
}
console.log(sum);
// w. a.p to find sum of all numbers in a given array

arr=[[1,2],[3,4],[5,6]]
sum = 0
for(let a of arr){
    for(let x of a){
        sum = sum+x
    }
}
console.log(sum);


// w . a p  to find all even numbers from the given array

arr=[[1,2],[3,4],[5,6]]
for(let a of arr){
    for(let x of a){
        if(x%2==0){
            console.log(x);
           
        }
        
    }

}