var x = 1n;
var y = 1n;
var z = 0;
var a = false;
var b = 0;
var p = [];
var out = "";
function factor(x) {
  p = [];
  z = 0;
  if(x === 0n) {
    document.getElementById("output").innerHTML = undefined;
    return undefined;
  }
  if(x === 1n) {
    document.getElementById("output").innerHTML = "(empty product)";
    return "(empty product)";
  }
  if(x === -1n) {
    document.getElementById("output").innerHTML = "-(empty product)";
    return "-(empty product)";
  }
  if(x < 0n) {
    out = "-(";
    x = x * -1n;
  }
  for(y = 2n; y * y <= x; y = y + 1n) {
     a = false;
     while(x % y === BigInt("0")) {
     a = true;
       if(p === []) {
         p = [[y, 1n]];
       }
       else {
         if(p.length <= z) {
            p.push([y, 1n]);
       } else {
        p[z-1][1] = p[z-1][1] + 1n;
         x = x / y;
         }
       }
  }
  if(a) {
    z++;
  }
  }
  for(b = 0; b < p.length; b++) {
    if(b < p.length - 1) {
      out = out + p[b][0] + "<sup>" + p[b][1] + "</sup>" + " × ";
    }
    else {
      out = out + p[b][0] + "<sup>" + p[b][1] + "</sup>";
    }
  }
  if(out.includes("-(")) {
      out = out + ")";
  }
  document.getElementById("output").innerHTML = out;
  return out;
}
