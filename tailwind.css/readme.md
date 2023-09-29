# Tailwind CSS

0. Install the extension in vscode

`https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss`

1. Install 

`npm install -D tailwindcss`

2. Go to your folder and init 

`npx tailwindcss init`

3. Put this into your tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
4. Create your input.css with this
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Create your folder structure and start tailwind so it will generate your css 

`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

6. In your html pages 

`<link href="output.css" rel="stylesheet" />`