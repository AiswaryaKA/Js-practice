// ARRAY

arr = [1,2,3]   //{key:value}
console.log(arr);

week = ['Monday','Tuesday','Wednesday', 2 , false] //{0:'Monday , 1:'Tuesday}
console.log(week);

console.log(week[1]);
console.log(week[2]);


console.log(typeof(arr));
console.log(typeof(week));

week.push('Thursday')
week.push('Friday') //to add item to last
console.log(week);

week.unshift('Sunday') //to add item to first
console.log(week);

week.pop() //to delete last item
console.log(week);

week.shift() //to delete first item
console.log(week);


fruits = ['Apple','orange','Kiwi' , 'Pineappple']

for(i=0; i<=fruits.length-1 ; i++){
    console.log(fruits[i]);
    
}

console.log("----------------------------------------");

// in operator

for (let x in fruits){
    console.log(fruits[x]);
    
}

console.log("----------------------------------------");

for (let x of fruits){
    console.log(x);
    
}

console.log("----------------------------------------");

//Program
expense = [12000 , 5000 , 60000 ,1200 ,50]

//w . a p to find the highest expense //60000

highest = expense[0]
for(let num of expense){  //12000 //5000 //60000
    if(highest<num){      //12000<12000//5000<12000 //12000<60000
        highest = num      //12000 //60000
    }
}
console.log(highest);


//w . a p to find the lowest expense //50

lowest= expense[0]
for(let num of expense){
    if(lowest>num){
        lowest = num
    }
}
console.log(lowest);

console.log("----------------------------------------");
//w . a p to find the total expense

sum = 0
for(let num of expense){
    sum = sum + num
}
console.log(sum);

console.log("----------------------------------------");

//w . a .p to check whether 2 is present in the given array

arr = [10 , 11 ,12 ,2 ,3 ,4]

searchitem = 2
isPresent = false
for(let n of arr){
    if(searchitem == n){
        isPresent = true
        break
        
    }
}
console.log(isPresent?'Present':'Not Present');

console.log("----------------------------------------");

//w . a p to display the following output
// i/p =[4 ,5 ,6]
// o/p =[11,10,9]
// 4+7==11 // 5+5==10 // 6+3==9

array =[4 ,5 ,6]
sum = 0
o = []
for(let n1 of array){
    sum = sum + n1
}
for(let n1 of array){
    o.push(sum-n1)
}
console.log(o);

console.log("----------------------------------------");
// w . a p to find the duplicate number from a given array

a = [10,20,30,20,30,40,50,60,10,10,50,60]
// o/p =[10,20,30]

o =[]
for(i=0 ; i<=a.length-1 ; i++){
    for(j=i+1 ; j<=a.length-1 ;j++){
        if(a[i]==a[j]){
            isDuplicate = false
           for(k=0; k<=o.length-1;k++){
            if(a[i]==o[k]){
                isDuplicate= true
            }
           }
           if(!isDuplicate){
            o.push(a[i])
           }
        }
    }
}
console.log(o.length==0?"not dulpication":o);




