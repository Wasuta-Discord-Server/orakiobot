'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['dude'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var response = 'dude';
      var length = (0, _util.getRandom)(5, 100);
      for (var i = 0; i < length; i++) {
        response += (0, _util.getRandom)(0, 9);
      }
      response += '?';
      payload.message.reply(response);
    }
  }]);

  return Command;
}();

module.exports = new Command();