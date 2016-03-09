'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _item = require('../item/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Menu/Dropdown item
 */
var MenuItem = function MenuItem(_ref) {
    var active = _ref.active;
    var color = _ref.color;
    var menuValue = _ref.menuValue;

    var other = _objectWithoutProperties(_ref, ['active', 'color', 'menuValue']);

    var classes = {
        active: active
    };
    if (color) {
        classes[color] = !!color;
    }
    other.className = (0, _classnames2.default)(other.className, classes);

    return _react2.default.createElement(_item2.default, _extends({}, other, {
        'data-value': menuValue,
        link: true }));
};

MenuItem.propTypes = _extends({}, _item2.default.propTypes, {
    /**
     * Is item active
     */
    active: _react2.default.PropTypes.bool,
    /**
     * Item color
     */
    color: _react2.default.PropTypes.string,
    /**
     * Item value (used in controlled menu)
     */
    menuValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string])
});

MenuItem.defaultProps = _extends({}, _item2.default.defaultProps);

exports.default = MenuItem;
//# sourceMappingURL=menuitem.js.map