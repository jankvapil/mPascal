@{%
    const myLexer = require("./lexer")
%}

@lexer myLexer 

####################

program
    ->  %begin statements %end _ml
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
    ->  _ml statement ( _ml statement):* _ml
        {%
            (data) => {
                const repeated = data[2]
                const rest = repeated.map(s => s[1])
                return [data[1], ...rest]
            }
        %}


statement
    ->  assignment _ ";":*      {% id %}
    |   fn_call _ ";":*         {% id %}
    |   fn_call_no_args _ ";"   {% id %}
    |   for_loop                {% id %}
    |   while_loop              {% id %}
    |   cond                    {% id %}


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


while_loop
    ->  %kw_while __ expr __ %kw_do __ subprogram 
        {%
            (data) => {
                return {
                    type: "while_loop",
                    expr: data[2],
                    statements: data[6]
                }
            }
        %}
    |  %kw_repeat __ml statements __ml %kw_until __ expr _ ";"
        {%
            (data) => {
                return {
                    type: "dowhile_loop",
                    expr: data[6],
                    statements: data[2]
                }
            }
        %}


for_loop
    ->  %kw_for __ assignment __ %kw_to __ expr __ %kw_do __ subprogram
        {%
            (data) => {
                return {
                    type: "for_loop",
                    assignment: data[2],
                    to: data[6],
                    statements: data[10]
                }
            }
        %}
    |   %kw_for __ assignment __ %kw_downto __ expr __ %kw_do __ subprogram
        {%
            (data) => {
                return {
                    type: "for_loop",
                    assignment: data[2],
                    downto: data[6],
                    statements: data[10]
                }
            }
        %}


cond 
    ->  %kw_if __ expr __ %kw_then __ml subprogram
        {%
            (data) => {
                return {
                    type: "cond",
                    expr: data[2],
                    statements: data[6]
                }
            }
        %}    
    |   %kw_if __ expr __ %kw_then __ml subprogram %kw_else __ml subprogram
        {%
            (data) => {
                return {
                    type: "cond",
                    expr: data[2],
                    statements: data[6],
                    else_statements: data[9]
                }
            }
        %}

expr 
    ->  %symbol {% id %}
    |   %string {% id %}
    # |   %number {% id %}
    |   num
    |   %bool   {% id %}
    |   fn_call {% id %}
    # |   operation {% id %}


num 
    ->  %number {% id %}
    |   %number _ %operator _ expr
    {%             
        (data) => {
            return {
                type: "operation",
                left: data[0],
                operator: data[2],
                right: data[4]
            }
        } %}
    |   %symbol _ %operator _ expr
    {%             
        (data) => {
            return {
                type: "operation",
                left: data[0],
                operator: data[2],
                right: data[4]
            }
        } %}

# operator
#     ->  %operator   {% id %}
#     |   %kw_mod     {% id %}


# operation 
#     ->  expr _ operator _ expr
#         {%
#             (data) => {
#                 return {
#                     type: "operation",
#                     left: data[0],
#                     operator: data[2],
#                     right: data[4]
#                 }
#             }
#         %}

## Zero or more multiline whitespaces
_ml   -> (%WS | %NL):*

## One or more multiline whitespaces
__ml   -> (%WS | %NL):+ 

## Zero or more whitespaces
_   -> %WS:*

## One or more whitespaces
__   -> %WS:+