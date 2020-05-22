'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lmgtfyLink = 'http://lmgtfy.com/?q=';

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['google'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var content = payload.message.content;

      var split = content.split(' ');
      var query = "";
      for (var i = 2; i < split.length; i++) {
        if (i != 2) {
          query += "+" + split[i];
        } else {
          query = split[i];
        }
      }
      payload.message.reply(lmgtfyLink + query);
    }
  }]);

  return Command;
}();

module.exports = new Command();