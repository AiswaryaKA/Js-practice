class StudentDetails{
    stuName
    stuRollno
    stuPlace
    studGrade
    stuAtte

    constructor(name,rollno,place,grade,attendance){
        this.stuName = name
        this.stuRollno = rollno
        this.stuPlace = place
        this.studGrade = grade
        this.stuAtte = attendance

    }

    display(){
        console.log(`Student name is ${this.stuName}`);
        console.log(`Student rollno is ${this.stuRollno}`);
        console.log(`Student place is ${this.stuPlace}`);
        console.log(`Student grade is ${this.studGrade}`);
        console.log(`Student attendance is ${this.stuAtte}`);
          
    }
}

const stu1 = new StudentDetails('A','123','Kochi','A','90%')
stu1.display()
const stu2 = new StudentDetails('B','123','Kochi','B','50%')
stu2.display()

const stu3 = new StudentDetails('C','123','Kochi','A','80%')
stu3.display()
