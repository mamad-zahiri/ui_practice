### Snap Code

Make simple screenshot of your code in any language and many different styles and color schemas

#### Install node modules
```shell
npm install --legacy-peer-deps
```

#### !!! Before build
This project is built before. You can find build files in `./dist` directory.

#### Build your self

If you wanna build propject on **localhost** or **another server**, comment the `line 8` in `vite.config.js` or change it as you need. That line is used to serve static files in this _github.io_ repository

comment the line:

```js
// base: "/ui_practice/snap-code/dist/",
```

or:

```js
    base: "/YOUR_PATH_TO_STATICS/",
```

##### Build
```shell
npm run build
```
##### For Developers
```shell
npm run dev
```
