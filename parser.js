const nearley = require("nearley")
const grammar = require("./mPascal.js")
const fs = require("mz/fs")

///
/// Parses .mP file and checks if it is correct MicroPascal source code
/// If syntax is correct, abstract syntax tree is created at same place as .mP file is located
///
const main = async () => {
    const inFilename = process.argv[2]

    if (!inFilename) {
        console.error("Please, set name of your .mP source file as an second argument.")
        return
    }

    const srcCode = (await fs.readFile(inFilename)).toString()
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
    parser.feed(srcCode)
    
    if (parser.results) {
        const ast = parser.results[0]
        const outFilename = inFilename.replace(".mP", ".ast")
        
        await fs.writeFile(outFilename, JSON.stringify(ast, null, " "))
    }
}

main().catch(e => console.error(e))