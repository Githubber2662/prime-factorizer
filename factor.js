var x = 1n;
var y = 1n;
var z = 0;
var a = false;
var b = 0;
var f = [];
var p = [];
var out = "";
function factor(x) {
  p = [];
  f = [];
  z = 0;
  document.getElementById("output").innerHTML = "";
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
        p[z][1] = p[z][1] + 1n;
         x = x / y;
         }
       }
  }
  p[z][1] = p[z][1] - 1n;
  if(a) {
    z++;
    if(f !== [];) {
    f.push(y);
    }
    else {
      f = [y];
    }
  }
  }
  if(x > 1 && !f.includes(x)) {
    p.push([x, 1n]);
  }
  for(b = 0; b < p.length; b++) {
    if(b < p.length - 1) {
      if(p[b][1] > 0) {
      out = out + p[b][0] + "<sup>" + p[b][1] + "</sup>" + " × ";
      }
    }
    else {
      if(p[b][1] > 0) {
      out = out + p[b][0] + "<sup>" + p[b][1] + "</sup>";
    }
    }
  }
  if(out.includes("-(")) {
      out = out + ")";
  }
  document.getElementById("output").innerHTML = out;
  return out;
}
