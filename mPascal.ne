@{%
    const myLexer = require("./lexer")
%}

@lexer myLexer 

####################

program
    ->  %begin statements _ml %end
        {%
           (data) => {  
                return {
                    type: "program",
                    statements: data[1] 
                }
            }
        %}

subprogram
    ->  program
    |   statement

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
    ->  assignment _ ";"        {% id %}
    |   fn_call _ ";"           {% id %}
    |   fn_call_no_args _ ";"   {% id %}
    |   for_to_do               {% id %}


fn_call_no_args
    -> %symbol 
        {% 
            (data) => {
                return {
                    type: "fn_call_no_args",
                    fnName: data[0]
                }   
            }
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
            (data) => { return [data[0]] }
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


for_to_do
    ->  "for" __ assignment __ "to" __ expr __ "do" __ml subprogram
        {%
            (data) => {
                return {
                    type: "for_to_do",
                    assignment: data[2],
                    to: data[6],
                    statements: data[10]
                }
            }
        %}


expr 
    ->  %symbol {% id %}
    |   %string {% id %}
    |   %number {% id %}
    |   fn_call {% id %}
    |   operation {% id %}


operation 
    ->  expr _ %operator _ expr
        {%
            (data) => {
                return {
                    type: "operation",
                    left: data[0],
                    operator: data[2],
                    right: data[4]
                }
            }
        %}

## Zero or more multiline whitespaces
_ml   -> (%WS | %NL):*

## One or more multiline whitespaces
__ml   -> (%WS | %NL):+ 

## Zero or more whitespaces
_   -> %WS:*

## One or more whitespaces
__   -> %WS:+