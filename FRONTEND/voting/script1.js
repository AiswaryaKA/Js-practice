// <!-- no data - please enter a value
//  >18 - eligible -green
//  <18 - not eligible - red
//  not a number - invalid input - orange -->


function ageCheck(){
      if(Age.value){
        if(Age.value >= 18){
            result.innerHTML = 'Eligible'
            result.style.color = 'green'
          }
          else if(Age.value<18){
             result.innerHTML = 'Not eligible'
            result.style.color = 'red'
          }
          else{
            result.innerHTML = 'Invalid input'
            result.style.color = 'orange'
          }
      }
      else{
        result.innerHTML = 'Please enter a value'
            result.style.color = 'blue'
      }

      
      
}