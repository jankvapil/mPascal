
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

write('Zadej cislo: ')

var a = 4;
var p = 0;
var b = a;
do {
if(b%2) {
var p = p^1;}
var b = b/2;}
while(!(b==0));

writeln()
write('  ')
write(a)
write(' ')
write(bin(a))
if(p) {
writeln('  licha parita')} else {
writeln('  suda parita')}
writeln()