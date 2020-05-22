'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _wolframAlpha = require('wolfram-alpha');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wolfram = (0, _wolframAlpha.createClient)(_config2.default.wolframToken);

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['convert', 'query', 'q', 'question', 'question\,'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var content = payload.message.content;

      var split = content.split(' ');
      var command = split[1];
      var query = content.replace(/\S+ /, '');

      if (command === 'q' || command === 'query') {
        query = content.replace(/\S+ \S+ /, '');
      }

      wolfram.query(query, function (error, result) {

        if (error || result.length === 0) {
          (0, _util.replyWithError)(payload.message);
          return console.log(error);
        }

        var res = result[1];

        if (res && res.subpods && res.subpods[0]) {
          payload.message.reply(res.subpods[0].text);
        }
      });
    }
  }]);

  return Command;
}();

module.exports = new Command();