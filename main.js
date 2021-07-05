
const fs = require("mz/fs")
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
/// Executes after calling "node generate.js <name_of_ast_file>"
///
const main = async () => {
    const inFilename = process.argv[2]

    if (!inFilename) {
        console.error("Please, set name of your .mP source file as an second argument.")
        return
    }

    const outAstFilename = inFilename.replace(".mP", ".ast")
    const outJSFilename = outAstFilename.replace(".ast", ".js")

    // console.log(inFilename)
    
    // generates .ast file
    await execWithOutput(`node parser ${inFilename}`)

    // generates .js file
    if (fs.exists(outAstFilename)) { 
        // console.log(outAstFilename)
        await execWithOutput(`node generator ${outAstFilename}`)
    }
    
    // executes .js file
    if (fs.exists(outJSFilename)) {
        await execWithOutput(`node ${outJSFilename}`)
    }

    // clean temporary files..
    // if (fs.exists(outAstFilename)) {
    //     fs.rmSync(outAstFilename)
    // }
    // if (fs.exists(outJSFilename)) {
    //     fs.rmSync(outJSFilename)
    // }
}

main().catch(e => console.error(e))