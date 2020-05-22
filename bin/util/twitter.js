'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTweet = undefined;

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseTweet = exports.parseTweet = function parseTweet(tweet) {

  if (tweet.user.screen_name !== _config2.default.twitter.user) {
    return;
  }

  if (tweet.entities.urls.length === 0) {
    return;
  }

  var url = tweet.entities.urls[0].expanded_url;

  if (url.indexOf('vine.co') > -1) {
    textChannel.sendMessage(_config2.default.owner + ' uploaded a new vine: ' + url);
  } else if (url.indexOf('periscope.tv') > -1) {
    textChannel.sendMessage(_config2.default.owner + ' started streaming: ' + url);
  }
};