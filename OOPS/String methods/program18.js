//w . a .p tp display all the vowels from a given array

str = 'Good Afternoon'
character = Array.from(str)
vowels = ['a','e','i','o','u','A','E','I','O','U']

o = []
for(let char of character){
    if(vowels.includes(char)){
        o.push(char)
    }
}

console.log(o);
console.log('--------------------------------------------------');


Array.from(str).filter((item)=>vowels.includes(item)).forEach((item)=>console.log(item))

//w . a .p to check a given string is palindrome or not eg:malayalam


// array = Array.from(string)
// console.log(array);
// for(let l of array){
    
// }

// palindrome = Array.from(string).filter((item)=>array.some((x)=>x[0]==x[8]))
// console.log(palindrome);

string = 'malayalam'
pal = ''
for(i=string.length-1 ; i>=0; i--){
    pal += string[i]
}
console.log(pal==string?'Palindrome':'Not palindrome');

console.log('--------------------------------------------------');

pal1 = string.split('').reverse().join('')
console.log(pal1==string?'Palindrome':'Not palindrome');

console.log('--------------------------------------------------');

start = 0
end = string.length-1
isPal=true
while(start<end){
    if(string[start]!= string[end]){
        isPal = false
    }
    start++
    end--
}
console.log(isPal?'Palindrome':'Not palindrome');

console.log('--------------------------------------------------');


// w . a .p to find the largest word from the given string

str = 'My first programme'
s = str.split(' ')
console.log(s);
lar = s.reduce((x1,x2)=>x1.length>x2.length?x1:x2)
console.log(lar);

console.log('--------------------------------------------------');

str = 'My first programme'
words = str.split('')
largest = word[0]









