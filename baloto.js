/*
The randomBall function return only one integer number per call
between 1 to 43
 */
function randomBall() {
    let randomNumber;
    do {  
        randomNumber = Math.random()*44;
        randomNumber = Math.floor(randomNumber);      
    } while(randomNumber === 0);
  return randomNumber;
}
/*
The randomSuperBall function return only one integer number per call
between 1 to 16 for assign it to the red ball 
 */
function randomSuperBall() {
  let randomNumber;
  do {  
      randomNumber = Math.random()*17;
      randomNumber = Math.floor(randomNumber);      
  } while(randomNumber === 0);
return randomNumber;
}
/*
The setFiveNumbers function return a 5 position array between 1 to 43
and controls with a switch statement what numbers in the array are
differents between each others
 */
function setFiveNumbers() {    
    let fiveNumbers = new Array(5); 
    for(let i = 0; i < 5; ++i) {     
        fiveNumbers[i] = randomBall();     
        switch(i) {            
            case 1:                
                while(fiveNumbers[1] === fiveNumbers[0]) fiveNumbers[1] = randomBall();         
            break;
            case 2:                
                while(fiveNumbers[2] === fiveNumbers[0] || fiveNumbers[2] === fiveNumbers[1]) fiveNumbers[2] = randomBall();         
            break;
            case 3:                
                while(fiveNumbers[3] === fiveNumbers[0] || fiveNumbers[3] === fiveNumbers[1] || fiveNumbers[3] === fiveNumbers[2]) fiveNumbers[3] = randomBall();         
            break;
            case 4:                
                while(fiveNumbers[4] === fiveNumbers[0] || fiveNumbers[4] === fiveNumbers[1] || fiveNumbers[4] === fiveNumbers[2] || fiveNumbers[4] === fiveNumbers[3]) fiveNumbers[4] = randomBall();         
            break;
            default:
            break;
        }
    } 
    return fiveNumbers;  
}
/*
The getFiveNumbers  function puts the array in the web page document
*/
function getFiveNumbers() {
    let fiveNumbers = new Array(5);
    fiveNumbers = setFiveNumbers();
    document.getElementById("b1").innerHTML= fiveNumbers[0];
    document.getElementById("b2").innerHTML= fiveNumbers[1];
    document.getElementById("b3").innerHTML= fiveNumbers[2];
    document.getElementById("b4").innerHTML= fiveNumbers[3];
    document.getElementById("b5").innerHTML= fiveNumbers[4];
    document.getElementById("bsuper").innerHTML= randomSuperBall();
}
/*

function background() {
  let fiveNumbers = new Array(5);
    
  for(let i = 0; i < 1000; ++i) {
    fiveNumbers = setFiveNumbers();
    
    for(let j = 0; j < 5; ++j) {    
      
      console.log(fiveNumbers[j]);       
    
      for(let k = 0; k < 5; ++k) {
       
        if(fiveNumbers[j] === fiveNumbers[k] && j != k) {
          console.log("*************************REPETIDO****************************")
        
        }

      }

    }
    console.log("FIN DEL ARRAY DE ARRIBA"); 
  }
  
}

background();

*/














