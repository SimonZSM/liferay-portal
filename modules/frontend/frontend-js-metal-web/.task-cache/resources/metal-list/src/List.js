var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define("frontend-js-metal-web@1.0.0/metal-list/src/List", ['exports', 'metal/src/dom/dom', './List.soy.js', 'metal-jquery-adapter/src/JQueryAdapter', './ListItem.js'], function (exports, _dom, _ListSoy, _JQueryAdapter) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dom2 = _interopRequireDefault(_dom);

	var _ListSoy2 = _interopRequireDefault(_ListSoy);

	var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var List = function (_ListBase) {
		_inherits(List, _ListBase);

		function List(opt_config) {
			_classCallCheck(this, List);

			return _possibleConstructorReturn(this, _ListBase.call(this, opt_config));
		}

		List.prototype.handleClick = function handleClick(event) {
			var target = event.target;

			while (target) {
				if (_dom2.default.match(target, '.listitem')) {
					break;
				}

				target = target.parentNode;
			}

			this.emit('itemSelected', target);
		};

		return List;
	}(_ListSoy2.default);

	List.prototype.registerMetalComponent && List.prototype.registerMetalComponent(List, 'List')
	List.ELEMENT_CLASSES = 'list';
	List.ATTRS = {
		items: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		},
		itemsHtml: {}
	};
	exports.default = List;

	_JQueryAdapter2.default.register('list', List);
});
//# sourceMappingURL=List.js.map