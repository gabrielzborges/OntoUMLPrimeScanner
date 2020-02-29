function lexer(codeText) {
    var current = 0

    var tokens = []

    var LETTERS = /[a-zA-Z]/;
    var NEWLINE = /\n/;
    var BACKSLASH = /\\/;
    var WHITESPACE = /\s/;
    var NUMBER = /[0-9]/;

    while (current < codeText.length) {
        var char = codeText[current]

        if (char === '[') {
            tokens.push({
                type: 'LBRACKET',
                value: '['
            })
            current++
            continue
        }

        if (char === ']') {
            tokens.push({
                type: 'RBRACKET',
                value: ']'
            })
            current++
            continue
        }

        if (char === ']') {
            tokens.push({
                type: 'RBRACKET',
                value: ']'
            })
            current++
            continue
        }

        if (char === '{') {
            tokens.push({
                type: 'LBRACE',
                value: '{'
            })
            current++
            continue
        }

        if (char === '}') {
            tokens.push({
                type: 'RBRACE',
                value: '}'
            })
            current++
            continue
        }

        if (char === '(') {
            tokens.push({
                type: 'LPAREN',
                value: '('
            })
            current++
            continue
        }

        if (char === ')') {
            tokens.push({
                type: 'RPAREN',
                value: ')'
            })
            current++
            continue
        }

        if (char === ';') {
            tokens.push({
                type: 'SEMI',
                value: ';'
            })
            current++
            continue
        }

        if (char === ':') {
            tokens.push({
                type: 'COLON',
                value: ':'
            })
            current++
            continue
        }

        if (char === ',') {
            tokens.push({
                type: 'COMMA',
                value: ','
            })
            current++
            continue
        }

        if (char === '.') {
            tokens.push({
                type: 'DOT',
                value: '.'
            })
            current++
            continue
        }

        if (char === '+') {
            tokens.push({
                type: 'PLUS',
                value: '+'
            })
            current++
            continue
        }

        if (char === '-') {
            tokens.push({
                type: 'MINUS',
                value: '-'
            })
            current++
            continue
        }

        if (char === '*') {
            tokens.push({
                type: 'TIMES',
                value: '*'
            })
            current++
            continue
        }

        if (char === '/') {
            tokens.push({
                type: 'OVER',
                value: '/'
            })
            current++
            continue
        }

        if (char === '=') {
            tokens.push({
                type: 'EQUAL',
                value: '='
            })
            current++
            continue
        }

        if (char === '!') {
            tokens.push({
                type: 'NOT',
                value: '!'
            })
            current++
            continue
        }

        if (char === '<') {
            tokens.push({
                type: 'LT',
                value: '<'
            })
            current++
            continue
        }

        if (char === '>') {
            tokens.push({
                type: 'GT',
                value: '>'
            })
            current++
            continue
        }

        if (char === '|') {
            tokens.push({
                type: 'PIPE',
                value: '|'
            })
            current++
            continue
        }

        if (WHITESPACE.test(char) || NEWLINE.test(char)) {
            current++
            continue
        }

        //NUMBER 1 OR MORE DIGIT
        if (NUMBER.test(char)) {
            var num = ''

            while (NUMBER.test(char)) {
                num += char
                char = codeText[++current]
            }
            tokens.push({
                type: 'NUM',
                value: num
            })
            continue
        }

        if (LETTERS.test(char) || char === '_') {
            var name = char;
            if (++current < codeText.length) {
                char = codeText[current]

                while ((LETTERS.test(char) || NUMBER.test(char) || char === '_') && (current + 1 <= codeText.length)) {
                    name += char
                    char = codeText[++current]
                }
            }
            switch (name) {
                case 'Category':
                    tokens.push({
                        type: 'CATEGORY',
                        value: name
                    })
                    break;
                case 'CollectiveUniversal':
                    tokens.push({
                        type: 'COLLECTIVE',
                        value: name
                    })
                    break;
                case 'Kind':
                    tokens.push({
                        type: 'KIND',
                        value: name
                    })
                    break;
                case 'ModeUniversal':
                    tokens.push({
                        type: 'MODE',
                        value: name
                    })
                    break;
                case 'Mixin':
                    tokens.push({
                        type: 'MIXIN',
                        value: name
                    })
                    break;
                case 'Phase':
                    tokens.push({
                        type: 'PHASE',
                        value: name
                    })
                    break;
                case 'Role':
                    tokens.push({
                        type: 'ROLE',
                        value: name
                    })
                    break;
                case 'RoleMixin':
                    tokens.push({
                        type: 'ROLEMIXIN',
                        value: name
                    })
                    break;
                case 'QualityUniversal':
                    tokens.push({
                        type: 'QUALITY',
                        value: name
                    })
                    break;
                case 'QuantityUniversal':
                    tokens.push({
                        type: 'QUANTITY',
                        value: name
                    })
                    break;
                case 'RelatorUniversal':
                    tokens.push({
                        type: 'RELATOR',
                        value: name
                    })
                    break;
                case 'SubKind':
                    tokens.push({
                        type: 'SUBKIND',
                        value: name
                    })
                    break;
                case 'BinaryFormalRelation':
                    tokens.push({
                        type: 'BINFORMALRELATION',
                        value: name
                    })
                    break;
                case 'BinaryMaterialRelation':
                    tokens.push({
                        type: 'BINMATERIALRELATION',
                        value: name
                    })
                    break;
                case 'Characterization':
                    tokens.push({
                        type: 'CHARACTERIZATION',
                        value: name
                    })
                    break;
                case 'Mediation':
                    tokens.push({
                        type: 'MEDIATION',
                        value: name
                    })
                    break;
                case 'ComponentOfRelation':
                    tokens.push({
                        type: 'COMPONOFRELATION',
                        value: name
                    })
                    break;
                case 'MemberOfRelation':
                    tokens.push({
                        type: 'MEMBOFRELATION',
                        value: name
                    })
                    break;
                case 'SubCollectionOfRelation':
                    tokens.push({
                        type: 'SUBCOLLECTOFRELATION',
                        value: name
                    })
                    break;
                case 'SubQuantityOfRelation':
                    tokens.push({
                        type: 'SUBQUANTOFRELATION',
                        value: name
                    })
                    break;
                case 'AnonymousGeneralizationSet':
                    tokens.push({
                        type: 'ANOYNGENSET',
                        value: name
                    })
                    break;
                case 'NamedGeneralizationSet':
                    tokens.push({
                        type: 'NAMEDGENSET',
                        value: name
                    })
                    break;
                case 'ComplexDataType':
                    tokens.push({
                        type: 'DATATYPE',
                        value: name
                    })
                    break;
                case 'Enumeration':
                    tokens.push({
                        type: 'ENUM',
                        value: name
                    })
                    break;
                default:
                    tokens.push({
                        type: 'ID',
                        value: name
                    })
                    break;
            }
            continue
        }

        //STRINGS single and double quotes
        if (char === '\'') {
            var str = '';
            char = codeText[++current]

            while (char !== '\'') {
                str += char
                char = codeText[++current]
            }

            char = codeText[++current]
            tokens.push({
                type: 'STRING',
                value: str
            })
            continue
        }

        if (char === '"') {
            var str = '';
            char = codeText[++current]

            while (char !== '"') {
                str += char
                char = codeText[++current]
            }

            char = codeText[++current]
            tokens.push({
                type: 'STRING',
                value: str
            })
            continue
        }

        //UNKOWN
        throw new TypeError('Type Error! Unknown token: ' + char)

    }

    return tokens
}

const fs = require('fs');
const path  = require('path');
var filePath = path.join(__dirname, '/testelexer.txt')

var code = fs.readFileSync(filePath);
console.log(code.toString())
var toks = lexer(code.toString())
console.log(toks)