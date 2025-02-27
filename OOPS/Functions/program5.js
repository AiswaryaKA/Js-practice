//Sort

arr = [10,11,12,2,3,4]
arr.sort((n1,n2)=>n1-n2)//ascending
console.log(arr);

arr.sort((n1,n2)=>n2-n1)//desending
console.log(arr);

// Algorithm

// 1 - Start
// 2 - Sort the given array
// 3 - Find the mid of the given array
        // mid = (low+up)/2
// 4 - 

arr=[10,11,12,2,3,4]
low=0
up=arr.length-1 //6-1=5
searchitem = 2
mid = 0
check = false
flag = false
arr.sort((n1,n2)=>n1-n2) [2,3,4,10,11,12]
while(low<=up){
        mid= Math.floor((low+up)/2) //0+5/2=2.5=2//0+1/2=0

        if(arr[mid]==searchitem){ //arr[2]=4==2?//arr[0]=2=2?true
                check = true
                console.log('present');
                break
                
        }else if(arr[mid]<searchitem){ //4<2?
                low=mid+1
        }else{
                up = mid-1 //2-1=1
        }
}if(check==false){
        console.log("Not present");
        
}
//!flag && console.log("Not present");



