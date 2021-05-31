
const moo = require("moo")

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
    begin:      'begin',
    end:        ['end;', 'end.'],
    operator:   ['<=', '>=', '=', '<>', '<', '>', '+', '-', '*', '/'],
    symbol:     {
        match: /[a-zA-Z][a-zA-Z_0-9]*/, value: (s) => s.toLowerCase(),
        type: caseInsensitiveKeywords({
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
    NL:         { match: /\n|\r\n/, lineBreaks: true },
}, {case: false})

module.exports = lexer