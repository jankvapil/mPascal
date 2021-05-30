
function write(arg) {
    var retyped = new String(arg);
    process.stdout.write(retyped.toString());
}

function writeln() {
    process.stdout.write("\n");
}

function ord(str) {
    console.log(str.charCodeAt(0))
}
