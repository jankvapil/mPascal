
function write(arg, n) {
  var retyped = new String(arg);
  if (n) {
    process.stdout.write(`${Array(n).join(' ')}${retyped}`);
  } else {
    process.stdout.write(retyped.toString());
  }
}

function writeln(...args) {
  if (args.length == 0) {
    process.stdout.write("\n");
  } else if (args.length == 1){
    process.stdout.write(`${args[0]}\n`);
  } else if (args.length == 2) {
    var n = args[1] - new String(args[0]).length
    process.stdout.write(`${Array(n).join(' ')}${args[0]}\n`);
  }
}

function read() {
  throw Error("Function read is not implemented.");
}

// function read() {
//   const ps = require('prompt-sync')
//   const prompt = ps()
//   let input = prompt("zadej..")
//   return input
// }

function ord(str) {
  return str.charCodeAt(0);
}

function hex(num) {
  return num.toString(16);
}

function bin(num) {
  return num.toString(2);
}

function chr(num) {
  return String.fromCharCode(num);
}

writeln()
for(var i = 0; i<=15; i++){var b = i;
var a = i/2;
while(a){
var c = b;
var d = a;
var e = 1;
var b = 0;
while(c){
if(c%2^d%2) {
var b = b+e;}
var c = c/2;
var d = d/2;
var e = 2*e;
}
var a = a/2;
}
write('  ')
write(bin(i), 5)
write(' ')
write(bin(b), 5)
write(b, 4)
var ii = 16+i;
var b = ii;
var a = ii/2;
while(a){
var c = b;
var d = a;
var e = 1;
var b = 0;
while(c){
if(c%2^d%2) {
var b = b+e;}
var c = c/2;
var d = d/2;
var e = 2*e;
}
var a = a/2;
}
write('   ')
write(bin(ii), 5)
write(' ')
write(bin(b), 5)
writeln(b, 4)}
writeln()