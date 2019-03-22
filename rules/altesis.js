/**
 * @fileoverview Enforce indentation when function argument list is on a new line so that it follows that of the functon's body
 * @author Marco Santonastasi
 */

module.exports = {
  meta: {
    type: 'layout',

    docs: {
      description: "Enforce indentation when function argument list is on a new line so that it follows that of the functon's body",
      category: 'Stylistic Issues',
      recommended: false,
    },

    fixable: 'whitespace',

    schema: [
      {
        enum: [ 'always', 'never' ]
      },
    ],

    messages: {
      IndentToBody: 'Argument list on new line must have same indent as body'
    }
  },
  create (context)
  {
    function reportBadIndentArgs (node)
    {
      const srcCode = context.getSourceCode(node);
      const funcKeywordToken = srcCode.getFirstToken(node);
      const openParensToken =
        srcCode
          .getFirstToken(
            node,
            token => ![ 'Keyword', 'Identifier' ].includes(token.type)
          );
      const funcBodyFirstToken =
        (
          srcCode
            .getFirstToken(
              node.body,
              token => token.type !== 'Punctuator'
            )
          || srcCode.getFirstToken(node.body)
        );

      const openParensStartline = parseInt(openParensToken.loc.start.line, 10);
      const funcKeywordStartline = parseInt(funcKeywordToken.loc.start.line, 10);
      const funcBodyStartLine = parseInt(funcBodyFirstToken.loc.start.column, 10);
      const openParensStartColumn = parseInt(openParensToken.loc.start.column, 10);
      const funcBodyStartColumn = parseInt(funcBodyFirstToken.loc.start.column, 10);
      const indentGap = funcBodyStartColumn - openParensStartColumn;

      if
        (
        (openParensStartline !== funcKeywordStartline)
        && (openParensStartline !== funcBodyStartLine)
        && (openParensStartColumn !== funcBodyStartColumn)
      )
      {
        if (indentGap > 0)
        {
          context.report(
            {
              node,
              loc: openParensToken.loc.start,
              messageId: 'IndentToBody',
              fix (fixer)
              {
                return [ fixer.insertTextBefore(openParensToken, ' '.repeat(Math.abs(indentGap))) ];
              }
            }
          );

        }
        else
        {
          context.report(
            {
              node,
              loc: openParensToken.loc.start,
              messageId: 'IndentToBody',
              fix (fixer)
              {
                return [ fixer.removeRange([ openParensToken.range[ 0 ] - Math.abs(indentGap), openParensToken.range[ 0 ] ]) ];
              }
            }
          );
        }
      }
    }

    return {'FunctionDeclaration, FunctionExpression': reportBadIndentArgs}
  }
};
