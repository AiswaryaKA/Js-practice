//Polymorphism

//method overloading

class B{
    methodb(...arg){
        console.log(arg);
        
        let sum = arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);
        
    }
}

const obj = new B()
obj.methodb(1,2,3)

//method overriding

class A{
    method(){
        console.log('Inside method');
        
    }

    method(){
        console.log('Inside second method');
        
    }
}

const object = new A()
object.method()