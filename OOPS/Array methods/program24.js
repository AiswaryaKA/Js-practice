accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('1. total number of accounts-------------------');

console.log(accounts.length);


//2. print account number whose ac_type is savings

console.log('2. print account number whose ac_type is savings-----------');

accounts.filter((ac)=>ac.ac_type=='savings').forEach((item) => {console.log(item.acno)});

//3.print the balance of accnount number 1000

console.log('3.print the balance of accnount number 1000----------');


accounts.filter((balance)=>balance.acno==1000).forEach((item)=>console.log(item.balance))
//find
console.log(accounts.find((data)=>data.acno==1000).balance)
//4. print all gpay transactions

console.log('4. print all gpay transactions---------');


accounts.map((data)=>data.transaction).flat().filter((item)=>item.mode=='gpay').forEach((item)=>console.log(item))




//5. print all transaction whose amount > 5000

console.log('5. print all transaction whose amount > 5000------');

accounts.map((data)=>data.transaction).flat().filter((item)=>item.amount>5000).forEach((item)=>console.log(item))



//6. print credit transaction of account 1002

console.log('6. print credit transaction of account 1002-----------');
credit = accounts.map((data)=>data.transaction).flat().filter((item)=>item.to==1002)
console.log(credit);



//7. print debit transaction of account 1002

console.log('7. print debit transaction of account 1002--------');
 debit = accounts.find((data)=>data.acno==1002).transaction
 console.log(debit);
 

//8. print transaction history of 1002

console.log('8. print transaction history of 1002---------');

trans_history = {
    credit:credit,
    debit:debit
}
console.log(trans_history);


//print transaction_history as an array
//spread - to join two array  
        // - represented by (...)

        transaction_history = [...credit, ...debit]
        console.log(transaction_history );
        

//9. print highest balance account details

console.log('9. print highest balance account details------');

highest = accounts.reduce((b1,b2)=>b1.balance>b2.balance?b1:b2)
console.log(highest);
