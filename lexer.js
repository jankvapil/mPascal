
const moo = require("moo")
const fs = require("mz/fs")

// cislice:   [0-9],
// dekadic:   {cislice}+,
// hexadecim: "$"[0-9a-fA-F]+,
// binarni:   "%"[01]+,
// pismeno_:  [a-zA-Z_],
// jmeno:     {pismeno_}({pismeno_}|{cislice})*,

const lexer = moo.compile({
    WS:         /[ \t]+/,
    bool:       ['false', 'true'],
    number:     /0|[1-9][0-9]*/,
    hexNum:     /\$[0-9a-fA-F]+/,
    binNum:     /\%[01]+/,
    semicolon:  ';',
    string:     /'(?:\\['\\]|[^\n'\\])*'/,
    comment:    /\/\/.*?$/,
    inlComment: /{(?:\\["\\]|[^\n"\\])*}/,
    lparen:     '(',
    rparen:     ')',
    operator:   ['not', '<=', '>=', '=', '<>', '<', '>', '+', '-', '*', '/', 'mod', 'or', 'xor', 'and'],
    keyword:    ['for', 'if', 'else', 'then', 'begin', 'end.', 'do', 'downto', 'while', 'repeat', 'until'],
    symbol:     /[a-zA-Z][a-zA-Z_0-9]*/,
    assign:     ':=',
    colon:      ':',
    NL:         { match: /\n/, lineBreaks: true },
})

// lte: '<=',
// gte: '>=',
// eqv: '=',
// diff: '<>',
// gt: '>',
// lt: '<',

const main = async () => {

    // const input = (await fs.readFile("tests/first.mP")).toString()
    
    const input = (await fs.readFile("tests/ASCII.mP")).toString()
    // const input = (await fs.readFile("tests/Test.mP")).toString()

    lexer.reset(input)
    while (true) {
        const token = lexer.next()
        if (!token) {
            break
        }
        console.log(token)
    }
}

main().catch(e => {
    console.error(e)
})