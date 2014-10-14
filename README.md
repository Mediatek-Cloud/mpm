mpm
=======

mpm: npm client for [mpmjs.org](http://mpmjs.org)

__mpm is base on npm v2.0, so there is a breaking change for [prefix "^"](https://github.com/npm/node-semver/pull/92).__

## Install

```bash
$ npm install mpm -g
```

If you're in China, maybe you should install it from our [China mirror](https://npm.taobao.org):

```bash
$ npm install mpm -g --registry=https://registry.npm.taobao.org
```

## Usage

Support all commands just like `npm`.

### Sync packages from `npm`

```bash
$ mpm sync [moduleName]
```

### Open package document or git web url

```bash
$ mpm doc [name]
$ mpm doc -g [name] # open git web url directly
```

## Build your own private registry npm cli

```bash
$ npm install mpm -g

# then alias it
$ alias mynpm='mpm --registry=http://registry.npm.example.com \
 --disturl=http://npm.example.com/dist \
 --registryweb=http://npm.example.com \
 --cache=$HOME/.mynpm/.cache \
 --userconfig=$HOME/.mynpmrc'
```

## License

(The MIT License)

Copyright(c) mpmjs.org and other contributors.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
