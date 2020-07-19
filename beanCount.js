//Bean Counting
function countBs(n){
  let count = 0;
  for (let i = 0; i<n.length; i++){
    if(n.charAt(i) === 'B'){
      count++;
    }
  }
  return count;
}

function countChar(n, c){
  let count = 0;
  for(let i = 0; i<n.length; i++){
    if(n.charAt(i) === c){
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
