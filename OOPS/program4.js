//Inheritance

class A{
    methoda(){
        console.log('Inside a');
        
    }
}

class B extends A{
    methodb(){
        console.log('Inside b');
        
    }
}

const obj = new B()
obj.methodb()
obj.methoda()