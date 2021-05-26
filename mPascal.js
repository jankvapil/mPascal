// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const myLexer  = require("./lexer")
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "block", "symbols": [(myLexer.has("begin") ? {type: "begin"} : begin), "__", "statements", "_", (myLexer.has("end") ? {type: "end"} : end)], "postprocess": 
        (data) => {
            return {
                type: "block",
                fnName: data[0],
                arg: data[4]
            }
        }
                },
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess": 
        (data) => {  return [data[0]] }
                },
    {"name": "statements", "symbols": ["statements", "__", "statement"], "postprocess": 
        (data) => { return [...data[0], data[2]] }
                },
    {"name": "statement", "symbols": ["_", "expr", "_", {"literal":";"}, "_"], "postprocess": 
        (data) => {  return [data[0]] }
                },
    {"name": "fn_call", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol), "_", {"literal":"("}, "_", "fn_arg", "_", {"literal":")"}], "postprocess": 
        (data) => {
            return {
                type: "fn_call",
                fnName: data[0],
                arg: data[4]
            }
        }
                },
    {"name": "fn_arg", "symbols": ["expr"], "postprocess": 
        (data) => {  return [data[0]] }
                },
    {"name": "assignment", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol), "_", {"literal":":="}, "_", "expr"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                symbol: data[0],
                value: data[4]
            }
        }
                },
    {"name": "expr", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol)], "postprocess": id},
    {"name": "expr", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": ["assignment"], "postprocess": id},
    {"name": "expr", "symbols": ["fn_call"], "postprocess": id},
    {"name": "expr", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expr", "symbols": ["fn_call"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "_$ebnf$2", "symbols": []},
    {"name": "_$ebnf$2", "symbols": ["_$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$2"]},
    {"name": "__$ebnf$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "__$ebnf$2", "symbols": [(myLexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__$ebnf$2", "symbols": ["__$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$2"]}
]
  , ParserStart: "block"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
