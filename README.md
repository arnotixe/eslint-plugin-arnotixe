# eslint-plugin-arnotixe
Arnotixe's eslint plugins

# Installation
`npm i github:arnotixe/eslint-plugin-arnotixe` 

in your .eslintrc.json, add the plugin to the "plugins" array and rule(s) to the rules object (or add the array and/or object too, if it isnt't there already), and enable the rule at your preferred warning level:
```
{
  "env": …,
  "extends": …,
  "plugins": ["arnotixe"], 
  "rules": {
    "arnotixe/no-hyphens-in-date": ["warn"] // or ["error"] for example
  }
}
```

## rule: no-hyphens-in-date
Why? Safari crashes if you do `const then = new Date("2023-1-1");`. See https://stackoverflow.com/questions/4310953/invalid-date-in-safari

This rule warns if any Date() call contains a hyphen. Like `Date("2023-1-1")`. Use `Date("2023/1/1")` instead. CAVEATS: Check if Date() written with / returns UTC or local time. May be browser dependent. Yes, I know Safari COULD take some formats with a hyphen (like the american month-first "MM-dd-yyyy"), but a warning is in order.

**fix** this rule can auto-fix "-" into "/". Run linter with --fix (or choose to fix in your editor).

# Notes to self
To work, an eslint plugin *must* be called eslint-plugin-*something*, but in .eslintrc.json the plugin *must* be referred to as only *something*, and the rules *something/rulename*

In this case, plugin is named *eslint-plugin-arnotixe* but is referred to as only *arnotixe* both in plugin and rules sections.
