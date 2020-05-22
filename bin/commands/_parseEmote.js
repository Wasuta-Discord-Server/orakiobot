'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../util');

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assetsPath = _path2.default.join(__dirname, '../../assets');
var audioPath = _path2.default.join(__dirname, '../../assets/audio/');
var emotes = require(assetsPath + '/emotes');
var audioEmotes = require(assetsPath + '/audiomotes');

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['parseEmote'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var bot = payload.bot,
          message = payload.message;
      var content = message.content;


      var emote = (0, _util.getEmote)(content);
      var isPM = message.channel.isPrivate;

      if (emotes.hasOwnProperty(emote)) {
        bot.sendMessage(message, emotes[emote]);
      }

      if (!isPM && audioEmotes.hasOwnProperty(emote)) {
        bot.voiceConnection.playFile('' + audioPath + audioEmotes[emote]);
      }
    }
  }]);

  return Command;
}();

module.exports = new Command();