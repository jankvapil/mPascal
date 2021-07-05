
const fs = require("mz/fs")

///
/// Generete JS expression from AST node
///
const generateJSExpr = (node) => {
   
    if (node.type === "cond") {
        // console.log(node)
        const expr = generateJSExpr(node.expr[0] ? node.expr[0] : node.expr)
        const statements = []
        node.statements.forEach(s => {
            const tmp = generateJSExpr(s)
            statements.push(tmp)
        })
        
        if (node.else_statements) {
            const else_statements = []
            node.else_statements.forEach(s => {
                const tmp = generateJSExpr(s)
                else_statements.push(tmp)
            })
            return `if(${expr}) {\n${statements.join("\n")}} else {\n${else_statements.join("\n")}}`
        } else {
            return `if(${expr}) {\n${statements.join("\n")}}`
        }
    }

    else if (node.type === "dowhile_loop") {
        // console.log(node)
        const expr = generateJSExpr(node.expr[0] ? node.expr[0] : node.expr)
        const statements = []
        node.statements.forEach(s => {
            const tmp = generateJSExpr(s)
            statements.push(tmp)
        })
        return `do {\n${statements.join("\n")}}\nwhile(!(${expr}));\n`
    }
    
    else if (node.type === "while_loop") {
        // console.log(node) 
        const expr = generateJSExpr(node.expr[0] ? node.expr[0] : node.expr)
        const statements = []
        node.statements.forEach(s => {
            const tmp = generateJSExpr(s)
            statements.push(tmp)
        })
        return `while(${expr}){\n${statements.join("\n")}\n}`
    }

    else if (node.type === "for_loop") {
        const symbol = node.assignment.symbol.value;
        const assignment = generateJSExpr(node.assignment)
        const statements = []
        node.statements.forEach(s => {
            const tmp = generateJSExpr(s)
            statements.push(tmp)
        })
        if (node.to) {
            const to = generateJSExpr(node.to[0])
            return `for(${assignment} ${symbol}<=${to}; ${symbol}++){${statements.join("\n")}}`
        } else if (node.downto) {
            const downto = generateJSExpr(node.downto[0])
            return `for(${assignment} ${symbol}>=${downto}; ${symbol}--){${statements.join("\n")}}`
        }
    }

    else if (node.type === "notOperation") {
        const right = generateJSExpr(node.right[0] ? node.right[0] : node.right)
        const operator = generateJSExpr(node.operator)
        const left = generateJSExpr(node.left)
        return `!${left}${operator}${right}`
    }

    else if (node.type === "operation") {
        const right = generateJSExpr(node.right[0] ? node.right[0] : node.right)
        const operator = generateJSExpr(node.operator)
        const left = generateJSExpr(node.left)
        return `${left}${operator}${right}`
    }

    else if (node.type === "assignment") {
        const symbolName = node.symbol.value
        let value
        
        // console.log(node)
        if (node.value.type === "fn_call") {
            // console.log(node)
            value = generateJSExpr(node.value.arg[0])
            const fnName = node.value.fnName.value ? node.value.fnName.value : node.value.fnName[0].value
            return `var ${symbolName} = ${fnName}(${value});`
        } 
        else if ((
          node.value && node.value.type === "operation") 
          || (node.value[0] && node.value[0].type && node.value[0].type === "operation")) {
            value = generateJSExpr(node.value[0] ? node.value[0] : node.value)
            return `var ${symbolName} = ${value};`
        } 
        else {
            if (node.value[0]) {
              value = node.value[0].value
            } else {
              value = node.value.value
            }
            // value = node.value[0].value ? node.value[0].value : node.value.value
            return `var ${symbolName} = ${value};`
        }
    } 

    else if (node.type === "fn_call") {
        // console.log(node.arg[0][0] ? node.arg[0][0] : node.arg[0])
        const fnName = node.fnName[0].value
        const arg = generateJSExpr(node.arg[0][0] ? node.arg[0][0] : node.arg[0])
        if (node.specifier) {
            // console.log(node.specifier[1].value)
            const spec = node.specifier[1].value
            return `${fnName}(${arg}, ${spec})`
        } else return `${fnName}(${arg})`
    } 

    else if (node.type === "fn_call_no_args") {
        const fnName = node.fnName[0].value        
        return `${fnName}()`
    } 

    else if (node.type === "program") {
        const res = []
        node.statements.forEach(s => {
            const jsExpr = generateJSExpr(s)
            res.push(jsExpr) 
        })
        return res.join("\n")

    } else if (node.type === "number") {
        return node.value
    } else if (node.type === "string") {
        return node.value
    } else if (node.type === "bool") {
        // console.log(node)
        return node.value
    } else if (node.type === "symbol") {
        // console.log(node)
        return node.value
    } else if (node.type === "operator") {
        return node.value
    }
}


///
/// Generates JS Code from Abstract Syntax Tree
///
const generateJS = (ast) => {
    const res = []
    if (ast.type === "program") {
        ast.statements.forEach(s => {
            const jsExpr = generateJSExpr(s)
            res.push(jsExpr)
        })
    } 
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
    
    // console.log(`Generating ${outFilename}...`)
    await fs.writeFile(outFilename, jsCode)
}

main().catch(e => console.error(e))