
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

if(true) {
writeln('true')} else {
writeln('false')}

