
function write(arg) {
    var retyped = new String(arg);
    process.stdout.write(retyped.toString());
}

function writeln() {
    process.stdout.write("\n");
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

var x = 1;
do {
write(x);
var x = x+1;}
while(x<10);
