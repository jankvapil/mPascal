// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const myLexer = require("./lexer")
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "program", "symbols": [(myLexer.has("begin") ? {type: "begin"} : begin), "statements", "_ml", (myLexer.has("end") ? {type: "end"} : end)], "postprocess": 
        (data) => {  
             return {
                 type: "program",
                 statements: data[1] 
             }
         }
                },
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["_ml", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["_ml", "statement", "statements$ebnf$1"], "postprocess": 
        (data) => {
            const repeated = data[2]
            const rest = repeated.map(s => s[1])
            return [data[1], ...rest]
        }
                },
    {"name": "statement", "symbols": ["assignment", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["fn_call", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["fn_call_no_args", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["program"], "postprocess": id},
    {"name": "fn_call_no_args", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol)], "postprocess":  
        (data) => {
            return {
                type: "fn_call_no_args",
                fnName: data[0]
            }   
        }
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
    {"name": "expr", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "_ml$ebnf$1", "symbols": []},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(myLexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_ml$ebnf$1", "symbols": ["_ml$ebnf$1", "_ml$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_ml", "symbols": ["_ml$ebnf$1"]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(myLexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1$subexpression$1"]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(myLexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1", "__ml$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__ml", "symbols": ["__ml$ebnf$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
