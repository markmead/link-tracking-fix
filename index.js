"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LinkTrackingFix=void 0;function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var LinkTrackingFix=/*#__PURE__*/function(){function a(){_classCallCheck(this,a);var b=this,c=_toConsumableArray(document.getElementsByTagName("a"));c.forEach(function(a){if(!a.hasAttribute("data-disable-link-tracking-fix")){var c=_toConsumableArray(a.children);c.forEach(function(a){var c=a.tagName;if("BUTTON"===c){var d=_toConsumableArray(a.children);d.forEach(function(a){return b.setPointerEvents(a)})}else b.setPointerEvents(a)})}})}return _createClass(a,[{key:"setPointerEvents",value:function setPointerEvents(a){a.style.pointerEvents="none"}}]),a}();exports.LinkTrackingFix=LinkTrackingFix;
