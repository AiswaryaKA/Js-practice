//pattern printing
//####
//####
//####
//####

for(row=1 ; row<=4 ; row++){
    str = ""
    for(col=1 ; col<=4 ; col++){
        str = str + "# "
    }
    console.log(str);
    
}

// #
// # #
// # # #
// # # # #

// for (row=1 ; row<=4 ; row){
//      str = ""

//    for(col=1 ; col<=row ; col++){
//        str = str + "# "
//     }
//     console.log(str);
// }


// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


for ( row= 1 ; row<=4 ; row++){
    str = ""
    for(col=1 ; col<=4 ; col++){
        str = str + col + " "

    }
    console.log(str);
    
}

console.log("------------------------------");

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for ( row= 1 ; row<=4 ; row++){
    str = ""
    for(col=1 ; col<=4 ; col++){
        str = str + row + " "

    }
    console.log(str);
    
}

console.log("------------------------------");

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for ( row= 1 ; row<=4 ; row++){
    str = ""
    for(col=1 ; col<=row ; col++){
        str = str + row + " "

    }
    console.log(str);
    
}

console.log("------------------------------");


// * * * *
// * * *
// * *
// *


for(row=1 ; row<=4 ; row++){
    str = ""
    for(col=4 ; row<=col ; col--){
        str = str + "* "
    }
    console.log(str);
}


console.log("------------------------------");

//hw 
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// * 


for(row=1 ; row<=5 ; row++){//1 =>1<=5?
    str = "" //""
    for(col=1 ; row>=col ; col++){ // 
        str = str + "* "
    }
    console.log(str);
}
for(row=1 ; row<=5 ; row++){
    str = ""
    for(col=4 ; row<=col ; col--){
        str = str + "* "
    }
    console.log(str);
}


//Another Method

for(row = 1 ; row<=9 ; row++){
   if(row<=5){
    str = ""
    for(col=1 ; col<=row ; col++){
        str = str + "* "
    }
    console.log(str);
    
   }else{
    str =""
    for(col=1 ; col<=10-row; col++){
        str = str + "* "
    }
    console.log(str);
    
   }
}

console.log("------------------------------------");

// Another Method


for(row = 1 ; row<=9 ; row++){
    
     str = ""
     for(col=1 ; row<=5? col<=row:col<=10-row ; col++){
         str = str + "* "
     }
     console.log(str);
    
}

console.log("------------------------------------");

//       *
//     *   *
//   *   *   *
// *   *   *   *

for(row=1 ; row<=4 ; row++){
    str = ""
    for(spa=4 ; spa>row ; spa--){
        str = str+" "
    }
    for(col=1 ; col<=row; col++){
        str = str+"* "
    }
    console.log(str);
    
}



console.log("-------------------------------------------");

for(row=1 ; row<=4 ; row++){
    str=""
    for(spa=4 ; spa>row ; spa++){
        str = " "

    }
    for(col=1 ; row<=col ; col ++){
        str = str + ""
    }
    console.log(str);
    
}
    
   
// HW
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *




console.log("-------------------------------------------");
console.log("-------------------------------------------");

//      *
//    *   *
//  *       *
//* * * * * * *

for(row=1 ;  row<=4 ; row++){
    str = ""
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str = str + "*"
        }
        else{
            str = str + " "
        }
    }
    console.log(str);
    
}


console.log("-------------------------------------------");
console.log("-------------------------------------------");

for(row=1 ; row<=5 ; row++){
    str = ''
    for(spa=5; spa>row ; spa++){

    }
    for(col=1 ; col<=row ; col++){
        str = str + '*'
    }
    console.log(str);
    
}
