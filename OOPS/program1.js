//OOPS 
//Class

class Employee{
    //properties

    empId
    empName
    empDesg

    //constructors
    constructor(id,name,desig){
        this.empId = id
        this.empName = name
        this.empDesg = desig
    }

    //methods
    display(){
        console.log(`Employee name is ${this.empName}`);
        
    }

}

const emp1 = new Employee('1', 'Max' , 'HR')
emp1.display()

const emp2 = new Employee('2', 'Maxwell' , 'Developer')
