'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assetsPath = _path2.default.join(__dirname, '../../assets');
var emotes = require(assetsPath + '/emotes');

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['answer', 'qq'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var bot = payload.bot,
          message = payload.message;
      var content = message.content;

      if (content.search(new RegExp('is (rare|spark|rarespark|\@RareSpark\#5323) cancer', 'i')) > -1) {
        message.reply(emotes["/cancer4"]);
      } else if (content.search(new RegExp('should (sven|kitsunesvensson|\@kitsunesvensson\#2988) (shutup|shut up)', 'i')) > -1) {
        message.reply(emotes["/dragonshadows3"] + ' \@kitsunesvensson\#2988');
      } else {
        (0, _util.replyWithError)(message);
      }
    }
  }]);

  return Command;
}();

module.exports = new Command();