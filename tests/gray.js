
function write(...args) {
  if (args.length == 1){
    if (args[0].type == 'hex' || args[0].type == 'bin') { 
      process.stdout.write(`${args[0].value}`);
    } else {
      process.stdout.write(`${args[0]}`);
    }
  } else if (args.length == 2) {
    if (args[0].type == 'hex' || args[0].type == 'bin') {
      var n = args[1] - new String(args[0].value).length
      process.stdout.write(`${Array(n).join('0')}${args[0].value}`);
    } else {
      var n = args[1] - new String(args[0]).length
      process.stdout.write(`${Array(n).join(' ')}${args[0]}`);
    }
  }
}

function writeln(...args) {
  write(...args);
  process.stdout.write('\n');
}

function read() {
  throw Error("Function read is not implemented.");
}

function ord(str) {
  return str.charCodeAt(0);
}

function hex(num) {
  return {type: 'hex', value: num.toString(16)};
}

function bin(num) {
  return {type: 'bin', value: num.toString(2)};
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