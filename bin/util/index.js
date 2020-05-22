'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Helper function to parse an emote from a message
 * @param  {String} message
 * @return {String} The first emote that has been found.
 */
var getEmote = exports.getEmote = function getEmote(message) {

  return message.toLowerCase().split(' ').find(function (e) {

    return e.indexOf('http') === -1 && e.indexOf('www.') === -1 && (e.indexOf('/') > -1 || e.indexOf('^') > -1);
  });
};

/**
 * Extracts an image from a message. The image must come directly after the keyword 'add'
 * @param  {String} message
 * @return {String} The url of an image.
 */
var getImage = exports.getImage = function getImage(message) {

  var splitted = message.split(' ');
  var splittedLower = message.toLowerCase().split(' ');
  var image = splitted[splittedLower.indexOf('add') + 1];

  if (image.indexOf('http') === -1) {
    return;
  }

  return image;
};

/**
 * Get a random number bounded by min and max, rounded down to a whole number.
 * @param  {number} min - Minimum number(inclusive)
 * @param  {number} max - Maximum number(exclusive)
 * @return {number} A randomly generated number rounded down to a whole number.
 */
var getRandom = exports.getRandom = function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var errorResponses = exports.errorResponses = ['I couldn\'t find anything.\n https://imgur.com/MLHOVwj', 'Hazuki-chan is smarter than me, she would know.\n https://imgur.com/X5SL7zP', 'idk why dont you ask adexe y nau.\n https://imgur.com/fqVHT8J'];

/**
 * Send a message containing one of the error responses.
 * @param  {object} messageObj - The discordjs message object for use in replying.
 */
var replyWithError = exports.replyWithError = function replyWithError(messageObj) {
  messageObj.reply(errorResponses[getRandom(0, errorResponses.length)]);
};