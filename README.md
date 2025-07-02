# hello-shell

> 🐚 A fun CLI to say hello to someone from your terminal — in color!

[![NPM Version](https://img.shields.io/npm/v/hello-shell.svg)](https://www.npmjs.com/package/hello-shell)
[![NPM Downloads](https://img.shields.io/npm/dm/hello-shell.svg)](https://www.npmjs.com/package/hello-shell)
[![License](https://img.shields.io/npm/l/hello-shell.svg)](./LICENSE)

## 📦 Installation & Usage

You don’t need to install it! Just run with `npx`:

```bash
npx hello-shell --name=Kevin --color=cyan
```

## 💡 Example Output

```
Hello, Kevin
```

> The message will be printed in the specified color (e.g. cyan).

## 🛠 Options

| Option          | Description                   | Default |
| --------------- | ----------------------------- | ------- |
| `--name=NAME`   | Name of the person to greet   | World   |
| `--color=COLOR` | Color to print the message in | white   |

Supported colors include:  
`red`, `green`, `blue`, `yellow`, `magenta`, `cyan`, `white`, etc.  
(colors provided by [chalk](https://github.com/chalk/chalk))

## 📙 Examples

```
npx hello-shell --name=Kevin --color=green
npx hello-shell --color=blue
```

## 🧪 Local Development

Clone the repo, install dependencies, and build:

```
npm install
npm run build
```

Then test:

```
node dist/index.js --name=Kevin --color=cyan
```
