text = 'HAI HELLO ALL HELLO WORLD'

//w . a . p to print the word count from the given string

//o/p = {'HAI':1 ,'HELLO':2 , 'ALL':1 , 'WORLD':1}

words = text.split(' ')
console.log(words);
object ={}
for(let w of words){
    if(w in object){
        object[w]+=1
    }else{
        object[w]=1

    }
}
console.log(object);

// methods

text.split(" ").forEach((w)=>w in object?object[w]+=1:object[w]=1)
console.log(object);

//w . a p to find the number count

NewArray =[10,20,30,10,50,20,30,30,60]

obj = {}
for(let n of NewArray){
    if(n in obj){
        obj[n]+=1
    }else{
        obj[n]=1

    }
}
console.log(obj);


//NewArray.forEach((n)=>n in obj?obj[n]+=1:obj[n]=1)
//console.log(obj);



// w.a p to find the first repeated pair
pattern = 'ABCBCDA'

// obj1 = {}
// l = Array.from(pattern)
// for(let item of 1){
//     if(item in obj1){
//         console.log();
        
//     }else{
        
//     }
// }
// console.log(c);
