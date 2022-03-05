Charlie's customized creat-react-app from scratch
=========
<br>

Key features
----

- React 18 applied (latest RC version)
- `Webpack` and `Babel` applied
- `Typescript` applied
- acts like create-react-app
- installs `styled-components` by default
- installs `recoilJS` by default
- installs `react-router-dom` by default
- (hopefully) lightweight

<br>

Usage
----

```json
"start": "webpack serve",
"dev": "nodemon -e ts,js,css,html,png,tsx --ignore ./build/ --exec \"ts-node\" ./devserver.ts",
"build": "npx webpack"
```