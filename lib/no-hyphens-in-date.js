// @ts-nocheck
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
    schema: [],
    messages: {
      noHyphens:
        "Use / instead of - in Date constructor, due Safari bug/feature",
    },
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "Date") {
          const args = node.parent.arguments;
          if (!args) {
            return;
          }
          for (const [index, argument] of args.entries()) {
            if (typeof argument.value !== "string") {
              return;
            }
            if (argument.value.includes("-")) {
              const nd = node.parent.arguments[index];
              context.report({
                node: nd,
                messageId: "noHyphens",
                fix: function (fixer) {
                  const before = `${node.parent.arguments[index].value}`;
                  return fixer.replaceText(nd, `"${before.replace(/-/g, "/")}"`)
                },
              });
            }
          }
        }
      },
    };
  },
};
