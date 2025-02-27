//     0   1         2            3            4               5                   6    
//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

console.log('1---------------------------------');


p = covid_data.reduce((x1,x2)=>x1[2]>x2[2]?x1:x2)
console.log(p[1]);

console.log('2---------------------------------');

//2. district having Highest 1st dose vaccine

d = covid_data.reduce((y1,y2)=>y1[5]>y2[5]?y1:y2)
console.log(d[1]);
console.log('3---------------------------------');


//3. district having lowest death rate

de = covid_data.reduce((y1,y2)=>y1[3]<y2[3]?y1:y2)
console.log(de[1]);
console.log('4---------------------------------');


//4. sort data with +ve case in descending order

console.log(covid_data.sort((z1,z2)=>z2[2]-z1[2]));


console.log('5---------------------------------');

//5. is district with +ve cases > 15000

positive = covid_data.some((x)=>x[2]>15000)
console.log(positive?"yes":"no");

console.log('6---------------------------------');


//6. sort data with 1st dose vaccine ascending order
covid_data.sort((x1,x2)=>x1[5]-x2[5]).forEach((item) =>console.log(item[1]));

console.log('7---------------------------------');

//7. Print Thrissur details

console.log(covid_data.find((t)=>t[1]=='Thrissur')
);

console.log('8---------------------------------');


//8. Print total number of positive cases

console.log(covid_data.map((y)=>y[2]).reduce((x1,x2)=>x1+x2));

console.log('9--------------------------------');


//9. Print total number of curred cases


console.log(covid_data.map((x)=>x[4]).reduce((x1,x2)=>x1+x2));

console.log('10---------------------------------');


//10. Print curred cases in Idukki

curred = covid_data.find((y)=>y[1]=='Idukki');
console.log(curred[4]);

