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
    
    // if (parser.results.length > 1) {
    //     console.error("Ambigous grammar!")
        
    //     for (let i = 0; i < parser.results.length; i++) {
    //         // console.log(i)
    //         await fs.writeFile(`errors/error_log_${i}.json`, JSON.stringify(parser.results[i], null, " "))
    //     }

    //     // await fs.writeFile("error_log.json", JSON.stringify(parser.results, null, " "))
    // } else if (parser.results.length == 1) {
        
    if (parser.results.length == 1) {
        const ast = parser.results[0]
        const outFilename = inFilename.replace(".mP", ".ast")
        
        console.log(`Generating ${outFilename}...`)
        await fs.writeFile(outFilename, JSON.stringify(ast, null, " "))
    } else {
        console.error(`Parsing error! ${parser.results.length} possible interpretations of program.`)
    }
}

main().catch(e => console.error(e))