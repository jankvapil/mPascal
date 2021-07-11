
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
for(var i = 0; i<=15; i++){var a = i;
var b = i/2;
var c = 1;
var g = 0;
while(a){
if(a%2^b%2) {
var g = g+c;}
var a = b;
var b = b/2;
var c = 2*c;
}
write(' ')
write(i, 4)
write(' ')
write(bin(i), 4)
write('  ')
write(bin(g), 4)
var j = 16+i;
var a = j;
var b = j/2;
var c = 1;
var g = 0;
while(a){
if(a%2^b%2) {
var g = g+c;}
var a = b;
var b = b/2;
var c = 2*c;
}
write(j, 5)
write(' ')
write(bin(j), 5)
write(' ')
writeln(bin(g), 5)}
writeln()
