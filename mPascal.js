// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const myLexer = require("./lexer")
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "program", "symbols": [(myLexer.has("begin") ? {type: "begin"} : begin), "statements", (myLexer.has("end") ? {type: "end"} : end), "_ml"], "postprocess": 
        (data) => {  
             return {
                 type: "program",
                 statements: data[1] 
             }
         }
                },
    {"name": "subprogram", "symbols": ["program"]},
    {"name": "subprogram", "symbols": ["statement"]},
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["_ml", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["_ml", "statement", "statements$ebnf$1", "_ml"], "postprocess": 
        (data) => {
            const repeated = data[2]
            const rest = repeated.map(s => s[1])
            return [data[1], ...rest]
        }
                },
    {"name": "statement$ebnf$1", "symbols": []},
    {"name": "statement$ebnf$1", "symbols": ["statement$ebnf$1", {"literal":";"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statement", "symbols": ["assignment", "_", "statement$ebnf$1"], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": []},
    {"name": "statement$ebnf$2", "symbols": ["statement$ebnf$2", {"literal":";"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statement", "symbols": ["fn_call", "_", "statement$ebnf$2"], "postprocess": id},
    {"name": "statement", "symbols": ["fn_call_no_args", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["for_loop"], "postprocess": id},
    {"name": "statement", "symbols": ["while_loop"], "postprocess": id},
    {"name": "statement", "symbols": ["cond"], "postprocess": id},
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
        (data) => { return [data[0]] }
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
    {"name": "while_loop", "symbols": [(myLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "__", "expr", "__", (myLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "while_loop",
                expr: data[2],
                statements: data[6]
            }
        }
                },
    {"name": "while_loop", "symbols": [(myLexer.has("kw_repeat") ? {type: "kw_repeat"} : kw_repeat), "__ml", "statements", "__ml", (myLexer.has("kw_until") ? {type: "kw_until"} : kw_until), "__", "expr", "_", {"literal":";"}], "postprocess": 
        (data) => {
            return {
                type: "dowhile_loop",
                expr: data[6],
                statements: data[2]
            }
        }
                },
    {"name": "for_loop", "symbols": [(myLexer.has("kw_for") ? {type: "kw_for"} : kw_for), "__", "assignment", "__", (myLexer.has("kw_to") ? {type: "kw_to"} : kw_to), "__", "expr", "__", (myLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "for_loop",
                assignment: data[2],
                to: data[6],
                statements: data[10]
            }
        }
                },
    {"name": "for_loop", "symbols": [(myLexer.has("kw_for") ? {type: "kw_for"} : kw_for), "__", "assignment", "__", (myLexer.has("kw_downto") ? {type: "kw_downto"} : kw_downto), "__", "expr", "__", (myLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "for_loop",
                assignment: data[2],
                downto: data[6],
                statements: data[10]
            }
        }
                },
    {"name": "cond", "symbols": [(myLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "__", "expr", "__", (myLexer.has("kw_then") ? {type: "kw_then"} : kw_then), "__ml", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "cond",
                expr: data[2],
                statements: data[6]
            }
        }
                },
    {"name": "cond", "symbols": [(myLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "__", "expr", "__", (myLexer.has("kw_then") ? {type: "kw_then"} : kw_then), "__ml", "subprogram", (myLexer.has("kw_else") ? {type: "kw_else"} : kw_else), "__ml", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "cond",
                expr: data[2],
                statements: data[6],
                else_statements: data[9]
            }
        }
                },
    {"name": "expr", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol)], "postprocess": id},
    {"name": "expr", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": ["num"]},
    {"name": "expr", "symbols": [(myLexer.has("bool") ? {type: "bool"} : bool)], "postprocess": id},
    {"name": "expr", "symbols": ["fn_call"], "postprocess": id},
    {"name": "num", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "num", "symbols": [(myLexer.has("number") ? {type: "number"} : number), "_", (myLexer.has("operator") ? {type: "operator"} : operator), "_", "expr"], "postprocess":      
        (data) => {
            return {
                type: "operation",
                left: data[0],
                operator: data[2],
                right: data[4]
            }
        } },
    {"name": "num", "symbols": [(myLexer.has("symbol") ? {type: "symbol"} : symbol), "_", (myLexer.has("operator") ? {type: "operator"} : operator), "_", "expr"], "postprocess":      
        (data) => {
            return {
                type: "operation",
                left: data[0],
                operator: data[2],
                right: data[4]
            }
        } },
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
