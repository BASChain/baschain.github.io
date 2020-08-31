## Welcome to Baschain GitHub Pages

> this project is BASChain portal static 

## Usage

### clone project and publish

```shell
git clone git@github.com:BASChain/baschain.github.io.git baschain.github.io
cd baschain.github.io/
yarn install

```

#### publish 

> config local .env.js

``` shell
cd baschain.github.io/
touch ci/.env.js
```

```js
module.exports = {
  origin:"",
  excludes:['report.json'],
  includes: ['agent', 'apply', 'appstore', 'help', 'home', 'mail', 'market', 'static', 'wallet', 'index.html', { regex: /^baschain-web_*.*.*.md$/i}],
  baseExcludes:[]
}
```

> origin : you portal build dist path

### push
```sh
yarn publish or node ci/publish.js
```


