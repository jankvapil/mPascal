
const util = require("util")
const exec = util.promisify(require('child_process').exec)


///
/// Executes command and writes output to stdout
///
const execWithOutput = async (cmd) => {
    const output = await exec(cmd)
    if (output.stdout) {
        process.stdout.write(output.stdout)
    }
    if (output.stderr) {
        process.stdout.write(output.stderr)
    }
}

///
/// Executes after calling "node tests"
///
const main = async () => {

    console.log("\n\TEST 1: vypis ASCII...\n")
    await execWithOutput(`node main tests/ASCII.mP`)

    console.log("\n\nTEST 2: prevod dekadickeho na binarni pro vstup 42...\n")
    await execWithOutput(`node main tests/dec2bin.mP`)

    console.log("\n\nTEST 3: vypis Fibonnaciho cisel...\n")
    await execWithOutput(`node main tests/fibo.mP`)

    console.log("\n\nTEST 4: Grayuv kod...\n")
    await execWithOutput(`node main tests/gray.mP`)
    
    console.log("\n\nTEST 5: Grayuv kod na binarni...\n")
    await execWithOutput(`node main tests/gray2bin.mP`)
    
    console.log("\n\nTEST 6: Parita pro vstup 4...\n")
    await execWithOutput(`node main tests/Parita.mP`)
    
    console.log("\n\nTEST 7: Prvocisla...\n")
    await execWithOutput(`node main tests/Prvocisla.mP`)

    console.log("\n\nTEST 8: Pyramida...\n")
    await execWithOutput(`node main tests/Pyramida.mP`)

    console.log("\n\nTEST 8: Spolecny delitel pro vstup 16 a 4...\n")
    await execWithOutput(`node main tests/spolDel.mP`)
    
    console.log("\n\nTEST 9: Test (komentare)...\n")
    await execWithOutput(`node main tests/Test.mP`)

    console.log("\n\nTEST 9: XOR...\n")
    await execWithOutput(`node main tests/xor.mP`)
}

main().catch(e => console.error(e))