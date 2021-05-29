@{%
    const myLexer = require("./lexer")
%}

@lexer myLexer 

####################

program
    ->  %begin statements _ml %end
        {%
           (data) => {  
                return [{
                    type: "program",
                    statements: data[1] 
                }]
            }
        %}


statements
    ->  _ml statement ( _ml statement):*
        {%
            (data) => {
                const repeated = data[2]
                const rest = repeated.map(s => s[1])
                return [data[1], ...rest]
            }
        %}


statement
    ->  assignment _ ";" {% id %}
    |   fn_call _ ";"    {% id %}
    |   program          {% id %} 


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
    |   %number     {% id %}


## Zero or more multiline whitespaces
_ml   -> (%WS | %NL):*

## One or more multiline whitespaces
__ml   -> (%WS | %NL):+ 

## Zero or more whitespaces
_   -> %WS:*

## One or more whitespaces
__   -> %WS:+