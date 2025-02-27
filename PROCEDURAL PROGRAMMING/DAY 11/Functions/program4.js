// write a program to find the pairs that give pair sum as 6 from the given array
// (2,3)
a = [2,3,4,5]

o=[]
for(i=0; i<=a.length ; i++){
    for(j=i+1 ; j<=a.length-1 ; j++){
        if(a[i]+a[j]==7){
            o.push(a[i],a[j])
        }
    }
}
console.log(o); //to print array
console.log(`(${o})`); //to print pair

console.log("----------------------------------------");

// method class

pairSum = 6
nopair= true
for(i=0; i<=a.length-1 ; i++){
    for(j=i+1 ; j<=a.length-1 ; j++){
        if(a[i]+a[j]==pairSum){
            nopair = false
            console.log(`(${a[i]},${a[j]})`);
        }
    }
}
// truthy operator
nopair && console.log('no pair');

console.log("----------------------------------------");

// w . a .p to print common numbers from the given arrays
// o/p = 11 ,20 ,30
p = [10,11,12,20,30]
q = [11,20,25,30,35]


for(i=0 ; i<=p.length-1 ; i++){
    for(j=0 ; j<=q.length-1 ; j++){
        if(p[i]==q[j]){
            console.log(p[i]);
            
        }
    }
}

console.log("----------------------------------------");
// Another method

p = [10,11,12,20,30]
q = [11,20,25,30,35]
isCommon = false
for(a of p){
    for(b of q){
        if(a==b){
            isCommon = true
            console.log(a);
            
        }
    }
}
isCommon && console.log('No common');





