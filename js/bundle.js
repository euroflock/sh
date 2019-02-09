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

	var $window, $root, $section1, $section2, $section3, $section4;
	var windowWidth, windowHeight, rootScrollTop, section1Top, section2Top, section3Top, section4Top;

	(function AppEntryPoint() {
		$window = $(window);
		$root = $('html, body');
		$section1 = $('.section.s1');
		$section2 = $('.section.s2');
		$section3 = $('.section.s3');
		$section4 = $('.section.s4');

		$('html').toggleClass('ready', true);
		$window.on('scroll', onWindowScroll);
		$('.apple, .google, .text .button').on('click', function () {
			$root.animate({ scrollTop: $(document).height() }, 4000);
		});
		$('.bottom .button').on('click', function () {
			$root.animate({ scrollTop: 0 }, 4000);
		});
		$('.links').on('click', '.link', function (e) {
			var $el = $(e.target);
			$el.parent().find('.link').toggleClass('current', false);
			$el.toggleClass('current', true);
		});

		onWindowScroll();
	})();

	function onWindowScroll () {
		windowWidth = $window.width();
		windowHeight = $window.height();
		rootScrollTop = $root[0].scrollTop;
		section1Top = $section1[0].offsetTop - rootScrollTop;
		section2Top = $section2[0].offsetTop - rootScrollTop;
		section3Top = $section3[0].offsetTop - rootScrollTop;
		section4Top = $section4[0].offsetTop - rootScrollTop;
		refreshViewState();
	}

	function refreshViewState () {
		$section1.toggleClass('visible', (section1Top + windowHeight >= 0 && section1Top < windowHeight));
		$section2.toggleClass('visible', (section2Top + windowHeight >= 0 && section2Top < windowHeight));
		$section3.toggleClass('visible', (section3Top + windowHeight >= 0 && section3Top < windowHeight));
		$section4.toggleClass('visible', (section4Top + windowHeight >= 0 && section4Top < windowHeight));
	}

/***/ })
/******/ ]);