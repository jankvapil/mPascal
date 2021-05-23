
const moo = require("moo")
const fs = require("mz/fs")

// cislice:   [0-9],
// dekadic:   {cislice}+,
// hexadecim: "$"[0-9a-fA-F]+,
// binarni:   "%"[01]+,
// pismeno_:  [a-zA-Z_],
// jmeno:     {pismeno_}({pismeno_}|{cislice})*,

const caseInsensitiveKeywords = (defs) => {
    const keywords = moo.keywords(defs)
    return (value) => keywords(value.toLowerCase())
}

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
    operator:   ['<=', '>=', '=', '<>', '<', '>', '+', '-', '*', '/'],
    symbol:     {
        match: /[a-zA-Z][a-zA-Z_0-9]*/, value: (s) => s.toLowerCase(),
        type: caseInsensitiveKeywords({
            'kw-begin': 'begin',
            'kw-end': 'end.',
            'kw-for': 'for',
            'kw-if': 'if',
            'kw-else': 'else',
            'kw-not': 'not',
            'kw-or': 'or',
            'kw-mod': 'mod',
            'kw-xor': 'xor',
            'kw-and': 'and',
            'kw-downto': 'downto',
            'kw-do': 'do',
            'kw-while': 'while',
            'kw-repeat': 'repeat',
            'kw-until': 'until'
        }),
    },
    assign:     ':=',
    colon:      ':',
    NL:         { match: /\n|\r/, lineBreaks: true },
}, {case: false})


module.exports = lexer

// // operator:   ['not', '<=', '>=', '=', '<>', '<', '>', '+', '-', '*', '/', 'mod', 'or', 'xor', 'and'],
// // keyword:    {
// //     match: ['FOR', 'IF', 'else', 'then', 'begin', 'end.', 'do', 'downto', 'while', 'repeat', 'until'],
// //     value: (i => i.toUpperCase())
// // },


// // lte: '<=',
// // gte: '>=',
// // eqv: '=',
// // diff: '<>',
// // gt: '>',
// // lt: '<',

// const main = async () => {

//     const input = (await fs.readFile("tests/first.mP")).toString()
    
//     // console.log(input)
    
//     // const input = (await fs.readFile("tests/ASCII.mP")).toString()
//     // const input = (await fs.readFile("tests/Dekadicke na binarni.mP")).toString()
//     // const input = (await fs.readFile("tests/Fibonacci.mP")).toString()
//     // const input = (await fs.readFile("tests/Grayuv kod.mP")).toString()
//     // const input = (await fs.readFile("tests/Test.mP")).toString()
//     // const input = (await fs.readFile("tests/Test.mP")).toString()
//     // const input = (await fs.readFile("tests/Test.mP")).toString()
//     // const input = (await fs.readFile("tests/Test.mP")).toString()
//     // const input = (await fs.readFile("tests/Test.mP")).toString()

//     // const input = (await fs.readFile("tests/Test.mP")).toString()

//     lexer.reset(input)
//     while (true) {
//         const token = lexer.next()
//         if (!token) {
//             break
//         }
//         // console.log(token)
//     }
// }

// main().catch(e => {
//     console.error(e)
// })