//ReverseArray
function reverseArray(arr){
  let aArray = [];
  for(let i=arr.length-1; i >=0; i--)
    {
      aArray.push(arr[i]);
    }
  return aArray;
}

// function reverseArrayInPlace(arr){
//   for(let i = 0; i <= Math.floor((arr.length-1)/2); i++)
//     {
//       let element = arr[i];
//       arr[i] = arr[arr.length - 1 -i];
//       arr[arr.length - 1 -i] = element;
//     }
//   return arr;
// }

function reverseArrayInPlace  (array){
  // let arrLength = array.length;
  for(i=0; i<array.length; i++){
    array.splice(i, 0, array.pop());
  }
  return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

