@{%
const myLexer  = require("./lexer")
%}

@lexer myLexer 

####################

statement
    ->  assignment  {% id %}
    |   fn_call     {% id %}


fn_call
    ->  %symbol _ "(" _ fn_args _ ")" _ ";" 
        {%
            (data) => {
                return {
                    type: "fn_call",
                    fnName: data[0],
                    args: data[5]
                }
            }
        %}


fn_args
    ->  expr
        {%
            (data) => {  return [data[0]]; }
        %}
    |   fn_args __ expr
        {%
            (data) => { return [...data[0], data[2]]; }
        %}


assignment
    ->  %symbol _ ":=" _ expr
        {%
            (data) => {
                return {
                    type: "assignment",
                    symbol: data[0],
                    value: data[4]
                }
            }
        %}


expr 
    ->  %string {% id %}
    |   %number {% id %}


## Zero or more whitespaces
_   -> %WS:*


## One or more whitespaces
__   -> %WS:+