
const moo = require("moo")

// cislice:   [0-9],
// dekadic:   {cislice}+,
// hexadecim: "$"[0-9a-fA-F]+,
// binarni:   "%"[01]+,
// pismeno_:  [a-zA-Z_],
// jmeno:     {pismeno_}({pismeno_}|{cislice})*,

const lexer = moo.compile({
    WS:      /[ \t]+/,
    number:  /0|[1-9][0-9]*/,
    hexnum: /\$[0-9a-fA-F]+/,
    binnum:   /\%[01]+/,
    string:  /'(?:\\["\\]|[^\n"\\])*'/,
    inlineComment:  /{(?:\\["\\]|[^\n"\\])*}/,
    lparen:  '(',
    rparen:  ')',
    identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
    assign: ':=',
    NL:      { match: /\n/, lineBreaks: true },
})

// const input = `123 ('ABC') {apple } as452fs`

// const input = `$FG23`
const input = `01 `

lexer.reset(input);
while (true) {
    const token = lexer.next();
    if (!token) {
        break;
    }
    console.log(token);
}
