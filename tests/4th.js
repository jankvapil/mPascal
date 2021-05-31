
function write(arg) {
    var retyped = new String(arg);
    process.stdout.write(retyped.toString());
}

// function writeln() {
//     process.stdout.write("\n");
// }

function writeln(...args) {
    if (args.length == 0) {
      process.stdout.write("\n");
    } else {
      process.stdout.write(`${args}\n`);
    }
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

write('print before');
writeln();
if(1>2) {
writeln('true');} else {
writeln('false');}
writeln('print always');