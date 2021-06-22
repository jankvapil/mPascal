
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

    // await execWithOutput(`node main tests/1st.mP`)
    // await execWithOutput(`node main tests/2nd.mP`)
    await execWithOutput(`node main tests/3rd.mP`)
    // await execWithOutput(`node main tests/4th.mP`)
    // await execWithOutput(`node main tests/5th.mP`)
    // await execWithOutput(`node main tests/6th.mP`)

}

main().catch(e => console.error(e))