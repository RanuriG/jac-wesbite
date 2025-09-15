import Prism from 'prismjs';

Prism.languages.jac = {
  // Comments: Python-style (#...), and Jac block (#* ... *#)
  'comment': [
    {
      pattern: /#\*[\s\S]*?\*#/,
      greedy: true
    },
    {
      pattern: /#.*/,
      greedy: true
    }
  ],

  // Triple-quoted or single-quoted strings
  'string': {
    pattern: /("""|'''|("|'))(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  },

  // Class-like declarations: node, edge, walker, test, etc.
  'class-name': {
    pattern: /\b(?:enum|obj|class|node|edge|walker|test)\s+\w+/,
    lookbehind: false
  },

  // Keywords
  'keyword': /\b(?:async|await|continue|entry|exit|del|assert|check|break|finally|for|from|elif|else|if|except|pass|raise|return|try|while|with|to|by|spawn|ignore|visit|disengage|lambda|priv|protect|pub|static|override|let|abs|has|case|match|impl|can|def)\b/,

  // Built-in types
  'builtin': /\b(?:str|int|float|list|tuple|set|dict|bool|bytes|any|type)\b/,

  // Boolean literals
  'boolean': /\b(?:True|False|None)\b/,

  // Function names before parentheses
  'function': /\b\w+(?=\s*\()/,

  // Numbers (float, hex, binary, decimal)
  'number': {
    pattern: /\b(?:0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[jJ]?)\b/,
    greedy: true
  },

  // Operators
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[*\/%^~]|<<|>>|:=|\?|@|and|or|not|in|is/,

  // Punctuation
  'punctuation': /[{}[\];(),.:]/
};

export default Prism.languages.jac;
