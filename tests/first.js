
///
/// Prints argument to stdout
///
function write(arg) {
    const retyped = new String(arg)
    process.stdout.write(retyped.toString())
}
var test = 42;
write('hua');

var test = 42;