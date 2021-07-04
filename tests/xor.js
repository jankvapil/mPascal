
function write(arg) {
  var retyped = new String(arg);
  process.stdout.write(retyped.toString());
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
  return num.toString();
}

var a = 1;
if(a^a) {
writeln('chybne')} else {
writeln('spravne')}
if(!a^false) {
writeln('chybne')} else {
writeln('spravne')}
if(a^false) {
writeln('spravne')} else {
writeln('chybne')}
if(!a^a) {
writeln('spravne')} else {
writeln('chybne')}
if(a||a) {
writeln('spravne')} else {
writeln('chybne')}
if(!a||false) {
writeln('chybne')} else {
writeln('spravne')}
if(a||false) {
writeln('spravne')} else {
writeln('chybne')}
if(!a||a) {
writeln('spravne')} else {
writeln('chybne')}