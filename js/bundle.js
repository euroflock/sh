/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	var $root;
	var rootScrollTop;
	var durationByHeight = 2000;

	(function AppEntryPoint() {
		$root = $('html, body');

		$('html').toggleClass('mobile', isTouchDevice());
		$('html').toggleClass('ready', true);
		$('.apple, .google, .menu, .access, .text .button').on('click', function () {
			var max = $(document).height() - $(window).height();
			rootScrollTop = $('html')[0].scrollTop || $('body')[0].scrollTop || 0;
			var distance = max - rootScrollTop;
			var duration = distance * durationByHeight / max;
			$root.animate({ scrollTop: max }, duration, 'easeInOutExpo');
		});
		$('.bottom .button').on('click', function () {
			var max = $(document).height() - $(window).height();
			rootScrollTop = $('html')[0].scrollTop || $('body')[0].scrollTop || 0;
			var distance = rootScrollTop;
			var duration = distance * durationByHeight / max;
			$root.animate({ scrollTop: 0 }, duration, 'easeInOutExpo');
		});
		$('.links').on('click', '.link', function (e) {
			var $el = $(e.target);
			$el.parent().find('.link').toggleClass('current', false);
			$el.toggleClass('current', true);
		});
	})();

	function isTouchDevice () {
		try { document.createEvent("TouchEvent"); return true; }
		catch (e) { return false; }
	}


/***/ })
/******/ ]);