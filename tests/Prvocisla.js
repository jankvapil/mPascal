
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
writeln('    Prvocisla do 1000')
writeln()
write(2, 5)
var n = 1;
var cislo = 3;
do {
var prvocislo = true;
var delitel = 3;
while(prvocislo&&(delitel*delitel<=cislo)){
if(cislo%delitel==0) {
var prvocislo = false;} else {
var delitel = delitel+2;}
}
if(prvocislo) {
if(n%10==0) {
writeln()}
write(cislo, 5)
var n = n+1;}
var cislo = cislo+2;}
while(!(cislo>1000));

writeln()
writeln()