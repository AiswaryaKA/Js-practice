// w . a .p to print common numbers from the given arrays
// o/p = 11 ,20 ,30
p = [10,11,12,20,30]
q = [11,20,25,30,35]

i=0
j=0
flag = false
while(i<p.length && j<q.length){
    if(p[i]==q[j]){
        flag=true
        console.log(p[i]);
        i++;
        j++
    }else if(p[i]<q[j]){
        i++;
            
     }else {
        j++
     }
}
!flag && console.log("No common Numbers");

console.log('----------------------------------');

// write a program to find the pairs that give pair sum as 6 from the given array
// (2,3)
a = [2,3,4,5]

