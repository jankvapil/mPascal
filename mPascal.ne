@{%
const myLexer  = require("./lexer")
%}

@lexer myLexer 

####################

block
    ->  %begin __ statements _ %end
        {%
            (data) => {
                return {
                    type: "block",
                    fnName: data[0],
                    arg: data[4]
                }
            }
        %}


statements
    ->  _ statement _
        {%
            (data) => {  return [data[0]] }
        %}
    |   statements __ statement
        {%
            (data) => { return [...data[0], data[2]] }
        %}


statement
    -> _ expr _ ";" _
        {%
            (data) => {  return [data[0]] }
        %}


fn_call
    ->  %symbol _ "(" _ fn_arg _ ")"
        {%
            (data) => {
                return {
                    type: "fn_call",
                    fnName: data[0],
                    arg: data[4]
                }
            }
        %}


fn_arg
    ->  expr
        {%
            (data) => {  return [data[0]] }
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
    ->  %symbol     {% id %}
    |   %string     {% id %}
    |   assignment  {% id %}
    |   fn_call     {% id %}
    |   %number     {% id %}
    |   fn_call     {% id %}


## Zero or more whitespaces
_   -> %WS:* | %NL:*


## One or more whitespaces
__   -> %WS:+ | %NL:+