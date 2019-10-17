# vno-camelcase

A VSCode extension which turns selected texts into their camelCased and snake_cased form.

## Features

1. Supports for
    - single line selection
    - multiple lines selections
2. Supports word connector "-" & "_" and the arbitory composition of them, e.g. "-\_\_ ,  \_-\_ ,  -\_- , --- , \_\_\_"

## Requirements

- vscode: ^1.36.0

## Extension Settings

Configure any short cut as you like:

For example:

```json
// keybindings.json

  [
    ...,
    {
        "key": "cmd+h cmd+c",
        "command": "extension.ccase"
    },
    {
        "key": "cmd+h cmd+s",
        "command": "extension.scase"
    }
  ]
```

## Known Issues

No till now.

## Release Notes

### 1.1.0

Support:

1. transform text into snake_cased

### 1.0.0

Support:

1. transform text into camelCased
2. single-line & multi-line selections
3. word connectors can be '-, \_' and their arbitory compositions

-----------------------------------------------------------------------------------------------------------
PRs are welcome!
[github](https://github.com/xvno/vscode-vno-camelcase.git)

**Enjoy!**
