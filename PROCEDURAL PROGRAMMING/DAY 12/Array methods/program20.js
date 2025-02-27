var car = {
    name:'Baleno',
    model:'Hatch back',
    manufacturer:'maruti',
    price:'10Lakh'
}

//display the car name nd manufacture name
console.log(car.name)

console.log(car.manufacturer)
console.log('--------------------------------------');

// check 'model' key is present in the object if present print the value

for(let key in car){
    if(key=='model'){
        console.log(car.model);
        
    }
}
console.log('--------------------------------------');

//truthy operator
'model' in car && console.log(car.model);

console.log('--------------------------------------');

//add 'varient' key to the car object with value as 'Manuel'
car['varient']=['Manuel']
console.log(car);

console.log('--------------------------------------');

//insert another value to 'automatic' to varient key
car.varient.push('automatic')
console.log(car);

console.log('--------------------------------------');


//add ' color' key to the object with value as 'red'.'yellow','white'

car['color'] = ['red','yellow','white']
console.log(car);
