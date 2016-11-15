(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var $ = require('jquery');

exports.default = function () {
    'use strict';

    // Save a reference to the global object

    var root = window;
    var App = root.App = window.App || {};

    App.$ = $;

    // Versioning
    App.version = "0.0.1";

    // Feature detection
    App.support = App.support || {};
    App.support.touch = 'ontouchstart' in window;

    return App;
}.call(undefined);

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(".form_datetime").datetimepicker({
    format: "dd MM yyyy - hh:ii",
    autoclose: true,
    todayBtn: true,
    pickerPosition: "bottom-left"
});

},{"jquery":"jquery"}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('jquery'); // Global dependencies


console.log('JS initialized in version:', _app2.default.version);

},{"./app":1,"jquery":"jquery"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXMvanMvYXBwLmpzIiwicmVzb3VyY2VzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksSUFBSSxRQUFRLFFBQVIsQ0FBUjs7a0JBRWdCLFlBQVk7QUFDeEI7O0FBRUE7O0FBQ0EsUUFBSSxPQUFPLE1BQVg7QUFDQSxRQUFJLE1BQU0sS0FBSyxHQUFMLEdBQVcsT0FBTyxHQUFQLElBQWMsRUFBbkM7O0FBRUEsUUFBSSxDQUFKLEdBQVEsQ0FBUjs7QUFFQTtBQUNBLFFBQUksT0FBSixHQUFjLE9BQWQ7O0FBRUE7QUFDQSxRQUFJLE9BQUosR0FBYyxJQUFJLE9BQUosSUFBZSxFQUE3QjtBQUNBLFFBQUksT0FBSixDQUFZLEtBQVosR0FBb0Isa0JBQWtCLE1BQXRDOztBQUVBLFdBQU8sR0FBUDtBQUVILENBbEJjLENBa0JaLElBbEJZLFc7O0FBb0JmLEVBQUUsWUFBWTtBQUNWLE1BQUUseUJBQUYsRUFBNkIsT0FBN0I7QUFDSCxDQUZEOztBQUlBLEVBQUUsZ0JBQUYsRUFBb0IsY0FBcEIsQ0FBbUM7QUFDL0IsWUFBUSxvQkFEdUI7QUFFL0IsZUFBVyxJQUZvQjtBQUcvQixjQUFVLElBSHFCO0FBSS9CLG9CQUFnQjtBQUplLENBQW5DOzs7OztBQ3pCQTs7Ozs7O0FBRUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFSLEMsQ0FIQTs7O0FBS0EsUUFBUSxHQUFSLENBQVksNEJBQVosRUFBMEMsY0FBSSxPQUE5QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0XHJcbiAgICB2YXIgcm9vdCA9IHdpbmRvdztcclxuICAgIHZhciBBcHAgPSByb290LkFwcCA9IHdpbmRvdy5BcHAgfHwge307XHJcblxyXG4gICAgQXBwLiQgPSAkO1xyXG5cclxuICAgIC8vIFZlcnNpb25pbmdcclxuICAgIEFwcC52ZXJzaW9uID0gXCIwLjAuMVwiO1xyXG5cclxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uXHJcbiAgICBBcHAuc3VwcG9ydCA9IEFwcC5zdXBwb3J0IHx8IHt9O1xyXG4gICAgQXBwLnN1cHBvcnQudG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XHJcblxyXG4gICAgcmV0dXJuIEFwcDtcclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKClcclxufSk7XHJcblxyXG4kKFwiLmZvcm1fZGF0ZXRpbWVcIikuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgZm9ybWF0OiBcImRkIE1NIHl5eXkgLSBoaDppaVwiLFxyXG4gICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgdG9kYXlCdG46IHRydWUsXHJcbiAgICBwaWNrZXJQb3NpdGlvbjogXCJib3R0b20tbGVmdFwiXHJcbn0pOyIsIi8vIEdsb2JhbCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuY29uc29sZS5sb2coJ0pTIGluaXRpYWxpemVkIGluIHZlcnNpb246JywgQXBwLnZlcnNpb24pOyJdfQ==
