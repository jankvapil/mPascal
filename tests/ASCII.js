
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
writeln('        Vypis ASCII tabulky')
writeln()
write('    ')
for(var i = 0; i<=15; i++){write(' ')
write(hex(i))}
writeln()
write('   ')
for(var i = 0; i<=34; i++){write('-')}
var znak = ord(' ');
do {
writeln()
write(' ')
write(hex(znak), 2)
write('|')
for(var j = 0; j<=15; j++){write(chr(znak+j), 2)}
write(' |')
var znak = znak+16;}
while(!(znak>255));

writeln()
write('   ')
for(var i = 0; i<=34; i++){write('-')}
writeln()
writeln()