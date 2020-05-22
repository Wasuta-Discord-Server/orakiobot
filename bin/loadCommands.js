'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = _path2.default.join(__dirname, 'commands'); /**
                                                       * Loads all commands in the commands directory and stores them by
                                                       * filename (minus extension) into an object that is exported.
                                                       */

var files = _fs2.default.readdirSync(cwd);
var botname = _config2.default.botname;

var commands = {};

files.forEach(function (file) {

  var command = require(cwd + '/' + file);

  command.aliases.forEach(function (alias) {

    // Commands that do not follow the <botname> <command> pattern are stored directly via their alias
    if (file.charAt(0) === '_') {
      commands[alias] = command;
    } else {
      commands[botname + ' ' + alias] = command;
    }
  });
});

exports.default = commands;