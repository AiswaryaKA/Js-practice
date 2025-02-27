class Bank{
    //property
    accountDetails = {
        1000 : {acno:1000,username:"userone",password:"userone",balance:5000},
        1001 : {acno:1001,username:"usertwo",password:"usertwo",balance:10000},
        1002 : {acno:1002,username:"userthree",password:"userthree",balance:1000},
        1003 : {acno:1003,username:"userfour",password:"userfour",balance:2000}
    }
//w . a. p to validate a given account 

validate(acno){
    return acno in this.accountDetails?true:false  
           
} 
//w . a. p to authenticate a given account

authenticate(acno,paswd){
    if(this.validate(acno)){
        if(this.accountDetails[acno].password == paswd){
            console.log("Valid account details");
            
        }
        else{
            console.log("Invalid account or password");
            
        }
    }
    else{
        console.log("Invalid account or password");
    }
}

//w . a. p to check the balance of a given account number

balanceCheck(acno,paswd){
    if(this.validate(acno)){
         if(this.accountDetails[acno].password == paswd){
            console.log(`Current balance of ${acno}`);
            console.log(this.accountDetails[acno].balance);     
            
         }
         else{
            console.log('Invalid password');
            
         }
    }
    else{
        console.log('Invalid account number');
        
    }

}


//w . a. p to transfer money between two accounts

moneyTransfer(fromacno, frompswd , toacno , amount){
    if(this.validate(fromacno) && this.validate(toacno)){
        if(this.accountDetails[fromacno].password == frompswd){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(`Current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance}`);

                this.accountDetails[fromacno].balance -= amount
                this.accountDetails[toacno].balance += amount

                console.log(`Balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance} after moneytransfer` );
                

            }
            else{
                console.log('Insufficient balance');
                
            }

        }
        else{
            console.log('Invalid password');
            
        }

    }
    else{
        console.log('Invalid account numbers');
        
    }
}

}

const obj = new Bank()
console.log(obj.validate(1002)?"Account exist":"No such account");

obj.authenticate(100,'userone')

obj.balanceCheck(1000,'userone')

obj.moneyTransfer(1000 ,'userone' ,1002 , 500)

