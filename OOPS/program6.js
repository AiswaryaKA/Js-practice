//Multilevel Inheritance

class A{
    methoda(){
        console.log('Inside method a');
        
    }
}

class B extends A{
    methodb(){
        console.log('Inside method b');
        
    }
}

class C extends B{
    methodc(){
        console.log('Inside method c');
        
    }
}

const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()
