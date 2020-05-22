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
var jsonfile = require('jsonfile');
var fs = require('fs');
var pageHead = '<DOCTYPE html>\n<head>\n<title>nocchibot emotes</title>\n<script src=\'https://dl.dropboxusercontent.com/s/qwvnaeigartecp2/sorttable.js\' type=\'text/javascript\'></script>\n<style>\ntr:nth-of-type(odd) {\nbackground-color:#ccc;\n}\ntr:nth-of-type(even) {\nbackground-color:#aaa;\n}\n</style>\n</head>\n<h1>Nocchibot emotes</h1>\n<br>If this page looks sloppy, it is because it is. I\'ve paid no attention to any standards whatsoever.\n<br>Click the heading of a column to sort alphabetically.\n<table border=\'1px\' cellspacing=\'0px\' class=\'sortable\' style=\'table-layout: fixed; width: 100%\'>\n<thead><tr>\n    <td><b>Name</b></td>\n    <td><b>Link</td>\n    <td><b>Image<b></td>\n</tr></thead>\n';
var pageFoot = '</table>\nBOOTIFUL!';
var emotesListed = '';

var Command = function () {
    function Command() {
        _classCallCheck(this, Command);

        this.aliases = ['makeemotelist'];
    }

    _createClass(Command, [{
        key: 'run',
        value: function run(payload) {
            var bot = payload.bot,
                message = payload.message;
            var content = message.content;


            var emote = (0, _util.getEmote)(content);
            var isPM = message.channel.isPrivate;
            jsonfile.readFile(assetsPath + '\\emotes.json', function (err, obj) {
                if (err) {
                    console.log(err);
                    return;
                }
                var stream = null;
                if (content.indexOf('imageless') > -1) {
                    for (var prop in obj) {
                        emotesListed += '<tr>\n    <td>' + prop + '</td>\n    <td>' + emotes[prop] + '</td>\n</tr>';
                    }
                    stream = fs.createWriteStream('outputimageless.html');
                } else {
                    for (var prop in obj) {
                        emotesListed += '<tr>\n    <td>' + prop + '</td>\n    <td>' + emotes[prop] + '</td>\n    <td><img src=\'' + emotes[prop] + '\' alt=\"' + prop + '\'></td>\n</tr>';
                    }
                    stream = fs.createWriteStream('output.html');
                }
                stream.once('open', function (fd) {
                    stream.write(pageHead);
                    stream.write(emotesListed);
                    stream.write(pageFoot);
                    stream.end();
                    console.log("file write stream ended");
                });
            });
        }
    }]);

    return Command;
}();

module.exports = new Command();