var x = BigInt("1");
var y = BigInt("1");
var z = 0;
var a = false;
var b = 0;
var p = [];
var end = ""
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
     a = false;
     while(x % y === BigInt("0")) {
     a = true;
       if(p === []) {
         p = [[y, BigInt("1")]];
       }
       else {
         p[z][1] = p[z][1] + 1;
         x = x / y;
       }
  }
  if(a) {
    z++;
  }
  }
  for(b = 0; b < p.length; b++) {
    out = out + p[b][0] + "<sup>" + p[b][1] + "</sup>" + " × ";
  }
  if(out.indexOf("×") == out.length - 2) {
      
  }
  if(out.includes("-(")) {
      out = out + ")"
  }
