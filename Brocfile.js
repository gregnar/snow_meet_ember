/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/foundation/css/normalize.css');
app.import('bower_components/foundation/css/foundation.css');

module.exports = app.toTree();