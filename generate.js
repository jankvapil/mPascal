
const fs = require("mz/fs")


///
/// Generete JS expression from AST node
///
const generateJSExpr = (node) => {
    if (node.type === "assignment") {
        const symbolName = node.symbol.value
        const value = node.value.value
        return `var ${symbolName} = ${value};`
    } else if (node.type === "fn_call") {
        const fnName = node.fnName.value

        // dont need more args at this time...
        const arg = generateJSExpr(node.arg[0])
        
        return `${fnName}(${arg});`
    } else if (node.type === "program") {
        
        console.log(node)
        // const fnName = node.fnName.value

        // // dont need more args at this time...
        // const arg = generateJSExpr(node.arg[0])
        
        // return `${fnName}(${arg});`
    } else if (node.type === "number") {
        return node.value
    } else if (node.type === "string") {
        return node.value
    } else if (node.type === "symbol") {
        return node.value
    }
}


///
/// Generates JS Code from Abstract Syntax Tree
///
const generateJS = (ast) => {
    const res = []
    ast.forEach(node => {
        const jsExpr = generateJSExpr(node)
        res.push(jsExpr)
    })
    return res.join("\n")
}


///
/// Executes after calling "node generate.js <name_of_ast_file>"
///
const main = async () => {
    const inFilename = process.argv[2]

    if (!inFilename) {
        console.error("Please, set name of your .ast file as an second argument.")
        return
    }

    const astString = (await fs.readFile(inFilename)).toString()
    const runtime = (await fs.readFile("runtime.js")).toString()
    const ast = JSON.parse(astString)
    const jsCode = runtime + "\n" + generateJS(ast)
    const outFilename = inFilename.replace(".ast", ".js")
    
    console.log(`Generating ${outFilename}...`)
    await fs.writeFile(outFilename, jsCode)
}

main().catch(e => console.error(e))