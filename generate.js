const fs = require("mz/fs")


///
///
///
const generateJSExpr = (node) => {
    if (node.type === "assignment") {
        symbolName = node.symbol.value
        value = node.value.value
        return `var ${symbolName} = ${value};`
    }
    // console.log(node)
}

///
/// Generates Abstract Syntax Tree
///
const generateJS = (ast) => {
    const res = []
    ast.forEach(expr => {
        const jsExpr = generateJSExpr(expr)
        res.push(jsExpr)
    })
    return res.join("\n")
}

const main = async () => {
    const inFilename = process.argv[2]

    if (!inFilename) {
        console.error("Please, set name of your .ast file as an second argument.")
        return
    }

    const astString = (await fs.readFile(inFilename)).toString()
    const ast = JSON.parse(astString)
    const jsCode = generateJS(ast)
    const outFilename = inFilename.replace(".ast", ".js")
    await fs.writeFile(outFilename, jsCode)
}



main().catch(e => console.error(e))