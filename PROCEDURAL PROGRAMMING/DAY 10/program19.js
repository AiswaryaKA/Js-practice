// * * * * *
// *       *
// *       *
// *       *
// * * * * *


for(row=1 ; row<=5 ; row++){
    str = " "
    for(col=1 ; col<=5 ; col++){
        if (row==1 || row==5 || col==1 || col==5 ) {
            str = str + "*"
        } else {
            str = str + " "
        }
    }
    console.log(str);
    
}

console.log("-----------------------------------------------");    



// 1
// 0 1
// 1 0 1
// 0 1 0 1

// for(row=1 ;row<=4 ; row++){
//     str=""
//     for(col=1 ; col<=row ; col++){
//         if(row==col || row==3 && col==1 || row==4 && col==2){
//             str = str + "1"
//         }else if(row==2 && col==1 || row==3 && col==2 && row==4)(
//              str = str + "0"
//         )

//     }
//     console.log(str);
    
// }

// Another method (positions of one and zero are considered here)
for(row=1; row<=4 ; row++){
    str=""
    for(col=1;col<=row;col++){
        if ((row+col)%2==0) {
             str = str + "1 "
            
        }else{
             str = str + "0 "
        }
    }
    console.log(str);
    
}

console.log("-----------------------------------------------");

// * * * * *
//   *   *  //(2,2) (2,4)
//     *      //(3,3)
//   *   *     //(4,2) (4,4)
// * * * * *


for(row=1 ; row<=5 ; row++){
    str = ""
    for(col=1 ; col<=5 ; col++){
        if(row==1){
             str = str+ "* "
        }else if(row==2 && col==2 || row==2 && col==4){
            str = str+ "  * "
        }else if(row==3 && col==3){
            str = str+ "    * "
        }else if(row==4 && col==2 || row==4 && col==4){
             str = str+ "  * "
        }else if(row==5){
             str = str+ "* "
        }
           
    }
    console.log(str);
    
}

console.log("-----------------------------------------------");

for(row=1 ; row<=5 ; row++){
    str = ""
    for(col=1 ; col<=5 ; col++){
        if(row==1 || row==5 || row==col || row+col==6){
            str = str + "*"
        }else{
            str = str + " "
        }
    }
    console.log(str);
    
    
    }


console.log("-----------------------------------------------");


//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

for(row=1 ; row<=5 ; row++){
    str = ""
    for(spa=1 ; spa<=5-row ; spa++){
        str = str +" "
    }
    for(col=1 ; col<=2*row)
    
        

    
}

