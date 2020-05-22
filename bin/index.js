'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _loadCommands = require('./loadCommands');

var _loadCommands2 = _interopRequireDefault(_loadCommands);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _discord2.default.Client();
var discordToken = _config2.default.discordToken,
    botname = _config2.default.botname;


var voiceChannel = null;
var textChannel = null;

bot.on('ready', function () {
  console.log('[' + new Date().toLocaleString() + '] [READY] Orakio is ready');
});

bot.on('error', function (error) {
  console.log('[' + new Date().toLocaleString() + '] [ERROR] ' + error);
});

bot.on('message', function (message) {
  // console.log('[' + (new Date()).toLocaleString() + '] [MESSAGE] ' + message.author.username + '@' + message.channel.name +': ' + message.cleanContent);

  var content = message.content,
      channel = message.channel;
  var username = message.author.username;

  var _content$toLowerCase$ = content.toLowerCase().split(' '),
      _content$toLowerCase$2 = _slicedToArray(_content$toLowerCase$, 2),
      operator = _content$toLowerCase$2[0],
      cmd = _content$toLowerCase$2[1];

  // Don't react to ourselves


  if (username === botname) {
    return;
  }

  var payload = {
    bot: bot,
    message: message,
    channels: { textChannel: textChannel, voiceChannel: voiceChannel }
  };

  if (_loadCommands2.default.hasOwnProperty(operator + ' ' + cmd)) {
    _loadCommands2.default[operator + ' ' + cmd].run(payload);
  } else if (content === botname) {
    _loadCommands2.default[botname].run(payload);
  } else if (content.indexOf('/') > -1 || content.indexOf('^') > -1) {
    _loadCommands2.default['parseEmote'].run(payload);
  }
});

// setInterval(() => {
//   console.log('[' + (new Date()).toLocaleString() + '] [RESTART] Restarting Orakio');
//   bot.logout(function() {
//     bot.loginWithToken(discordToken);
//   });
// }, 1800000);

bot.loginWithToken(discordToken);