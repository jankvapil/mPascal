// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const l = require("./lexer")
var grammar = {
    Lexer: l,
    ParserRules: [
    {"name": "program$ebnf$1$subexpression$1", "symbols": ["fn_call_no_args"]},
    {"name": "program$ebnf$1$subexpression$1", "symbols": ["fn_call"]},
    {"name": "program$ebnf$1", "symbols": ["program$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "program$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": [(l.has("begin") ? {type: "begin"} : begin), "__", "statements", "__", "program$ebnf$1", "_", (l.has("end") ? {type: "end"} : end), "_"], "postprocess": 
        (data) => {  
             return {
                 type: "program",
                 statements: data[2],
                 lastFn: data[4] 
             }
         }
                },
    {"name": "program2", "symbols": [(l.has("begin") ? {type: "begin"} : begin), "__", "statements", "__", (l.has("end") ? {type: "end"} : end)], "postprocess": 
        (data) => {  
             return {
                 type: "program",
                 statements: data[2]
             }
         }
                },
    {"name": "subprogram", "symbols": ["statement"]},
    {"name": "subprogram", "symbols": ["program2"]},
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["__", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statement", "statements$ebnf$1"], "postprocess": 
        (data) => {
            const repeated = data[1]
            const rest = repeated.map(s => s[1])
            return [data[0], ...rest]
        }
                },
    {"name": "statement$ebnf$1", "symbols": [{"literal":";"}], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["assignment", "statement$ebnf$1"], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": [{"literal":";"}], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["fn_call", "statement$ebnf$2"], "postprocess": id},
    {"name": "statement$ebnf$3", "symbols": [{"literal":";"}], "postprocess": id},
    {"name": "statement$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["fn_call_no_args", "_", "statement$ebnf$3"], "postprocess": id},
    {"name": "statement", "symbols": ["for_loop"], "postprocess": id},
    {"name": "statement", "symbols": ["while_loop"], "postprocess": id},
    {"name": "statement", "symbols": ["cond"], "postprocess": id},
    {"name": "statement", "symbols": [(l.has("inlComment") ? {type: "inlComment"} : inlComment)]},
    {"name": "statement", "symbols": [(l.has("comment") ? {type: "comment"} : comment)]},
    {"name": "fn_call_no_args$subexpression$1", "symbols": [(l.has("symbol") ? {type: "symbol"} : symbol)]},
    {"name": "fn_call_no_args$subexpression$1", "symbols": [(l.has("specFn") ? {type: "specFn"} : specFn)]},
    {"name": "fn_call_no_args", "symbols": ["fn_call_no_args$subexpression$1"], "postprocess":  
        (data) => {
            return {
                type: "fn_call_no_args",
                fnName: data[0]
            }   
        }
                },
    {"name": "fn_call$subexpression$1", "symbols": [(l.has("symbol") ? {type: "symbol"} : symbol)]},
    {"name": "fn_call$subexpression$1", "symbols": [(l.has("specFn") ? {type: "specFn"} : specFn)]},
    {"name": "fn_call$ebnf$1$subexpression$1", "symbols": [{"literal":":"}, (l.has("number") ? {type: "number"} : number)]},
    {"name": "fn_call$ebnf$1", "symbols": ["fn_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fn_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fn_call", "symbols": ["fn_call$subexpression$1", "_", {"literal":"("}, "_", "fn_arg", "_", "fn_call$ebnf$1", {"literal":")"}], "postprocess": 
        (data) => {
            return {
                type: "fn_call",
                fnName: data[0],
                arg: data[4],
                specifier: data[6]
            }
        }
                },
    {"name": "fn_arg", "symbols": ["expr"], "postprocess": 
        (data) => { return [data[0]] }
                },
    {"name": "assignment", "symbols": [(l.has("symbol") ? {type: "symbol"} : symbol), "_", {"literal":":="}, "_", "expr"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                symbol: data[0],
                value: data[4]
            }
        }
                },
    {"name": "while_loop", "symbols": [(l.has("kw_while") ? {type: "kw_while"} : kw_while), "_", "expr", "_", (l.has("kw_do") ? {type: "kw_do"} : kw_do), "_", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "while_loop",
                expr: data[2],
                statements: data[6]
            }
        }
                },
    {"name": "while_loop", "symbols": [(l.has("kw_repeat") ? {type: "kw_repeat"} : kw_repeat), "__", "statements", "__", (l.has("kw_until") ? {type: "kw_until"} : kw_until), "__", "expr", "_", {"literal":";"}], "postprocess": 
        (data) => {
            return {
                type: "dowhile_loop",
                expr: data[6],
                statements: data[2]
            }
        }
                },
    {"name": "for_loop", "symbols": [(l.has("kw_for") ? {type: "kw_for"} : kw_for), "__", "assignment", "__", (l.has("kw_to") ? {type: "kw_to"} : kw_to), "__", "expr", "__", (l.has("kw_do") ? {type: "kw_do"} : kw_do), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "for_loop",
                assignment: data[2],
                to: data[6],
                statements: data[10]
            }
        }
                },
    {"name": "for_loop", "symbols": [(l.has("kw_for") ? {type: "kw_for"} : kw_for), "__", "assignment", "__", (l.has("kw_downto") ? {type: "kw_downto"} : kw_downto), "__", "expr", "__", (l.has("kw_do") ? {type: "kw_do"} : kw_do), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "for_loop",
                assignment: data[2],
                downto: data[6],
                statements: data[10]
            }
        }
                },
    {"name": "cond", "symbols": [(l.has("kw_if") ? {type: "kw_if"} : kw_if), "__", "expr", "__", (l.has("kw_then") ? {type: "kw_then"} : kw_then), "__", "subprogram", "__", (l.has("kw_else") ? {type: "kw_else"} : kw_else), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "cond",
                expr: data[2],
                statements: data[6],
                else_statements: data[10]
            }
        }
                },
    {"name": "cond", "symbols": [(l.has("kw_if") ? {type: "kw_if"} : kw_if), "__", "expr", "__", (l.has("kw_then") ? {type: "kw_then"} : kw_then), "__", "subprogram"], "postprocess": 
        (data) => {
            return {
                type: "cond",
                expr: data[2],
                statements: data[6]
            }
        }
                },
    {"name": "expr", "symbols": [(l.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": ["fn_call"], "postprocess": id},
    {"name": "expr", "symbols": ["operation"]},
    {"name": "operation", "symbols": ["operation", "_", (l.has("operator") ? {type: "operator"} : operator), "_", "atomParen"]},
    {"name": "operation", "symbols": ["atomParen"]},
    {"name": "atomParen", "symbols": [(l.has("lparen") ? {type: "lparen"} : lparen), "_", "atom", "_", (l.has("rparen") ? {type: "rparen"} : rparen)]},
    {"name": "atomParen", "symbols": ["atom"]},
    {"name": "lpar", "symbols": [(l.has("lparen") ? {type: "lparen"} : lparen)], "postprocess": id},
    {"name": "rpar", "symbols": [(l.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": id},
    {"name": "atom", "symbols": [(l.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "atom", "symbols": [(l.has("not") ? {type: "not"} : not), "_", (l.has("symbol") ? {type: "symbol"} : symbol)], "postprocess":   
        (data) => {
            return {
                type: "symbol",
                value: `!${data[2]}`,
                text: `!${data[2]}`
            }
        } 
                },
    {"name": "atom", "symbols": [(l.has("symbol") ? {type: "symbol"} : symbol)], "postprocess": id},
    {"name": "atom", "symbols": [(l.has("not") ? {type: "not"} : not), "_", (l.has("bool") ? {type: "bool"} : bool)], "postprocess":   
        (data) => {
            return {
                type: "bool",
                value: `!${data[2]}`,
                text: `!${data[2]}`
            }
        } 
                },
    {"name": "atom", "symbols": [(l.has("bool") ? {type: "bool"} : bool)], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(l.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(l.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "_$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": () => { }},
    {"name": "__$ebnf$1$subexpression$1", "symbols": [(l.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1$subexpression$1", "symbols": [(l.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1$subexpression$1"]},
    {"name": "__$ebnf$1$subexpression$2", "symbols": [(l.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1$subexpression$2", "symbols": [(l.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "__$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": () => { }}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
