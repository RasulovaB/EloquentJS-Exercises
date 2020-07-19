//minimum
const min = function(num1, num2){
  return Math.min(num1, num2);
  
};

const number = min(20,6);
console.log(number);//6


//second option
function minim(num1, num2){
  if(num1<num2){
    return num1;
  }else{
    return num2;
  }
}

console.log(minim(0, 10));//0
console.log(minim(0, -10));//-10
