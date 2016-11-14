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

},{"jquery":"jquery"}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('jquery'); // Global dependencies


console.log('JS initialized in version:', _app2.default.version);

},{"./app":1,"jquery":"jquery"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXMvanMvYXBwLmpzIiwicmVzb3VyY2VzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksSUFBSSxRQUFRLFFBQVIsQ0FBUjs7a0JBRWdCLFlBQVU7QUFDekI7O0FBRUE7O0FBQ0EsS0FBSSxPQUFPLE1BQVg7QUFDQSxLQUFJLE1BQU0sS0FBSyxHQUFMLEdBQVcsT0FBTyxHQUFQLElBQWMsRUFBbkM7O0FBRUEsS0FBSSxDQUFKLEdBQVEsQ0FBUjs7QUFFQTtBQUNBLEtBQUksT0FBSixHQUFjLE9BQWQ7O0FBRUE7QUFDQSxLQUFJLE9BQUosR0FBYyxJQUFJLE9BQUosSUFBZSxFQUE3QjtBQUNBLEtBQUksT0FBSixDQUFZLEtBQVosR0FBb0Isa0JBQWtCLE1BQXRDOztBQUVBLFFBQU8sR0FBUDtBQUVBLENBbEJjLENBa0JaLElBbEJZLFc7Ozs7O0FDRGY7Ozs7OztBQUVBLElBQUksSUFBSSxRQUFRLFFBQVIsQ0FBUixDLENBSEE7OztBQUtBLFFBQVEsR0FBUixDQUFZLDRCQUFaLEVBQTBDLGNBQUksT0FBOUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdHZhciByb290ID0gd2luZG93O1xyXG5cdHZhciBBcHAgPSByb290LkFwcCA9IHdpbmRvdy5BcHAgfHwge307XHJcblxyXG5cdEFwcC4kID0gJDtcclxuXHJcblx0Ly8gVmVyc2lvbmluZ1xyXG5cdEFwcC52ZXJzaW9uID0gXCIwLjAuMVwiO1xyXG5cclxuXHQvLyBGZWF0dXJlIGRldGVjdGlvblxyXG5cdEFwcC5zdXBwb3J0ID0gQXBwLnN1cHBvcnQgfHwge307XHJcblx0QXBwLnN1cHBvcnQudG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XHJcblxyXG5cdHJldHVybiBBcHA7XHJcblxyXG59KS5jYWxsKHRoaXMpOyIsIi8vIEdsb2JhbCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuY29uc29sZS5sb2coJ0pTIGluaXRpYWxpemVkIGluIHZlcnNpb246JywgQXBwLnZlcnNpb24pOyJdfQ==
