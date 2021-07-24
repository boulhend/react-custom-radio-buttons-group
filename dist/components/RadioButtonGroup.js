"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioButtonGroup;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _nameContext = _interopRequireDefault(require("../nameContext"));

var _uuid = require("uuid");

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RadioButtonGroup(_ref) {
  let {
    onChange,
    defaultValue,
    hide,
    radioButtonStyle,
    activeButtonStyle,
    values,
    groupStyle
  } = _ref;
  const groupName = (0, _uuid.v4)();
  const [currentValue, setCurrentValue] = (0, _react.useState)(defaultValue ? defaultValue : values[0]);

  const handleChange = e => {
    setCurrentValue(e.target.value);
    onChange(e);
  };

  (0, _react.useEffect)(() => {
    setCurrentValue(defaultValue ? defaultValue : values[0]);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_nameContext.default.Provider, {
    value: groupName
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: groupStyle
  }, values.map(value => /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    value: value,
    style: currentValue === value ? _objectSpread(_objectSpread({}, radioButtonStyle), activeButtonStyle) : radioButtonStyle,
    onChange: handleChange,
    defaultValue: defaultValue,
    hide: hide,
    key: value
  }, value))));
}