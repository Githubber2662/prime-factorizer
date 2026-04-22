var x = BigInt("1");
var y = BigInt("1");
var z = 0;
var p = [];
var end = ""
function findCoordinate(in2dArray, searchValue){
    for(let x = 0; x < in2dArray[0].length; x++){
        for(let y = 0; y < in2dArray.length; y++){
            if(in2dArray[y][x] === searchValue){
                return {x, y};
            }
        }
    }
    return null;
}
function factor(x) {
  if(x === BigInt("0")) {
    return undefined;
  }
  if(x === BigInt("1")) {
    return "(empty product)";
  }
  if(x === BigInt("-1")) {
    return "-(empty product)";
  }
  if(x < BigInt("0")) {
    end = "-(";
    x = x * BigInt("-1");
  }
  for(y = BigInt("2"); y * y <= x; y = y + BigInt("1")) {
     while(x % y === BigInt("0")) {
       if(p === []) {
         p = [[y, BigInt("1")]];
       }
       else {
         p[z][1] = p[z][1] + 1;
       }
  }
  z++;
}
