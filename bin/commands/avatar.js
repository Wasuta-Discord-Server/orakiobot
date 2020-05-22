'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);

    this.aliases = ['avatar'];
  }

  _createClass(Command, [{
    key: 'run',
    value: function run(payload) {
      var content = payload.message.content;
      var users = payload.bot.users;

      var searchUser = content.split(' ')[2].toLowerCase();

      var foundUser = users.find(function (user) {
        return user.username.toLowerCase().indexOf(searchUser) > -1;
      });

      if (foundUser) {
        payload.message.reply(foundUser.avatarURL);
      } else {
        payload.message.reply('Could not find that user.');
      }
    }
  }]);

  return Command;
}();

module.exports = new Command();