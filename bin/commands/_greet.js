'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assetsPath = _path2.default.join(__dirname, '../../assets');
var audioPath = _path2.default.join(__dirname, '../../assets/audio/');
var audioEmotes = require(assetsPath + '/audiomotes');

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = [_config2.default.botname];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var bot = payload.bot,
          message = payload.message,
          _payload$channels = payload.channels,
          textChannel = _payload$channels.textChannel,
          voiceChannel = _payload$channels.voiceChannel;
      var botname = _config2.default.botname;


      var isPM = message.channel.isPrivate;

      bot.sendMessage(message, botname + ' desu.');
    }
  }]);

  return Command;
}();

module.exports = new Command();