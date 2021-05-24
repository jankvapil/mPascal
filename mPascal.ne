@{%
const myLexer  = require("./lexer")
%}

@lexer myLexer 

####################

statements
    ->  statement
        {%
            (data) => {  return [data[0]] }
        %}
    |   statements %NL statement
        {%
            (data) => {  return [...data[0], data[2]] }
        %}

        
statement
    ->  assignment  {% id %}
    |   fn_call     {% id %}


fn_call
    ->  %symbol _ "(" _ fn_arg _ ")" _ ";" 
        {%
            (data) => {
                return {
                    type: "fn_call",
                    fnName: data[0],
                    arg: data[4]
                }
            }
        %}


                    # arg: data[4] ? data[4][0] : []

fn_arg
    ->  expr
        {%
            (data) => {  return [data[0]] }
        %}
    # |   fn_args __ expr
    #     {%
    #         (data) => { return [...data[0], data[2]]; }
    #     %}


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
    ->  %symbol {% id %}
    |   %string {% id %}
    |   %number {% id %}


## Zero or more whitespaces
_   -> %WS:*


## One or more whitespaces
__   -> %WS:+