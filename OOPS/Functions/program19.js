// OBJECT

a =[1000,'Neel','developer','Kochi',25000,3]
// key:value = object store
console.log('-------------------------------------------------------');

employee = {
    empid:1000,
    empname:'Neel',
    empDesg:'developer',
    empLoc:'Kochi',
    empSal:25000,
    empExp:3
}
console.log(a); //array
console.log('-------------------------------------------------------');


console.log(employee);//object

console.log('-------------------------------------------------------');


console.log(a[2]);

console.log(employee['empDesg']);
console.log(employee.empDesg); //when there is exact name

console.log('-------------------------------------------------------');


//Display all keys in a given object

for(let key in employee){
    console.log(key);
    console.log(employee[key]); //here key is a variable so don't need to use ''
}

console.log('-------------------------------------------------------');

// add => objectname['key']=value

employee['empAtten']='90%'
console.log(employee);

console.log('-------------------------------------------------------');

Object.assign(employee,{'status':true})
console.log(employee);

console.log('-------------------------------------------------------');

//update

employee['empExp'] = 5
console.log(employee);

console.log('-------------------------------------------------------');

employee['empExp'] += 5
console.log(employee);

console.log('-------------------------------------------------------');

//delete

delete employee.status
console.log(employee);
