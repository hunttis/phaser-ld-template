# Ludum Dare Phaser Template

Based on the ES6 boilerplate by Daniel Belohlavek

https://github.com/belohlavek/phaser-es6-boilerplate


## Usage

You need NPM to build and run this project.

After you've installed NPM:

Install dependencies

`npm install`

Run a development build...

`npm start`

...or a production build.

`npm run production`

Development builds will copy phaser.min.js together with phaser.map and phaser.js Your ES6 code will be transpiled into ES5 and concatenated into a single file. A sourcemap for your code will also be included (by default game.map.js). This build includes the phaser-debug plugin.

Production builds will only copy phaser.min.js and phaser-tiled plugin. Your ES6 code will be transpiled and minified using UglifyJS.

Any modification to the files inside the ./src and ./static folder will trigger a full page reload.

If you modify the contents of other files, please manually restart the server.

## Included (installed with npm install)

Phaser 2.6.2 https://github.com/photonstorm/phaser

Phaser Debug 1.1.8 https://github.com/englercj/phaser-debug

### Included as a static file

Phaser Tiled Plugin 2.0.2 https://github.com/englercj/phaser-tiled
