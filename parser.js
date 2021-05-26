const nearley = require("nearley")
const grammar = require("./mPascal.js")
const fs = require("mz/fs")

const main = async () => {
    const inFilename = process.argv[2]

    if (!inFilename) {
        console.error("Please, set name of your .mP source file as an second argument.")
        return
    }


    const srcCode = (await fs.readFile(inFilename)).toString()
    // console.log(srcCode)

    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

    // Parse something!
    parser.feed(srcCode)

    // parser.results is an array of possible parsings.
    // console.log(parser.results) // [[[[ "foo" ],"\n" ]]]
    
    if (parser.results.length > 1) {
        console.error("Ambigous grammar!")
    } else if (parser.results.length == 1) {
        const ast = parser.results[0]
        const outFilename = inFilename.replace(".mP", ".ast")
        
        console.log(`Generating ${outFilename}...`)
        await fs.writeFile(outFilename, JSON.stringify(ast, null, " "))
    } else {
        console.error("Parsing error!")
    }
}

main().catch(e => console.error(e))