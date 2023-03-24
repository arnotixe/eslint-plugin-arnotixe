// @ts-nocheck
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      noHyphens:
        "Use / instead of - in Date constructor, due Safari bug/feature",
    },
  },
  create(context) {
    return {
      // ExpressionStatement(node) {
      //   console.log("callexpr arg", node);
      //   if (node.expression) {
      //     context.report({
      //       node: node.expression,
      //       message: "NODE!",
      //     });
      //   }
      // },
      // Identifier: function (node) {
      //   if (node.name.length === 1) {
      //     context.report({
      //       node,
      //       message: "Avoid single-letter identifiers",
      //     });
      //   }
      // }
      Identifier(node) {
        if (node.name === "Date") {
          // console.log('is date', node.parent.arguments);
          // context.report({
          //   node: node.parent,
          //   message:
          //     "Is Datex",
          // });
          for (const [index, argument] of node.parent.arguments.entries()) {
            if (argument.value?.includes("-")) {
              context.report({
                node: node.parent.arguments[index],
                messageId: "noHyphens"
              });
            }
          }
        }
      }
    };
  },
};
