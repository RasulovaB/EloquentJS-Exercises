var size = 8;
var space="";
for(var y=0; y<size; y++)//outer loop to separate lines
  {
    for(var x=0; x<size; x++)//every inner loop either "" or "#"
      {
        if((y+x) % 2 == 0){//to check if result is odd or even
          space += " ";
        }
        else{
           space += "#";
        }
        
      }
    
    space += "\n";
  }
console.log(space);
