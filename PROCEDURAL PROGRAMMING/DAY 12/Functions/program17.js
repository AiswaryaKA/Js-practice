//subString

str = 'Luminar'
x = str.substring(0,3)
console.log(x);

y = str.substring(2)
console.log(y);

//slice
z = str.slice(2)
console.log(z);


w = str.slice(-5)
console.log(w);


//trim

strg = '    hello'
console.log(strg);

console.log(strg.trim());

// split

text = 'Good Evening All'
arr = text.split(' ')
console.log(arr);

arr = text.split('e')
console.log(arr);

arr = text.split('')
console.log(arr);

// replace
sentance = 'I come from Kakkanad'
a = sentance.replace('Kakkanad','Kochi')
console.log(a);

sentance1 = 'I come from Kakkanad.I also work in Kakkanad'
a1 = sentance1.replaceAll('Kakkanad','Kochi')
console.log(a1);


// Array.from

string = 'Luminar'
c = Array.from(string)
console.log(c);
