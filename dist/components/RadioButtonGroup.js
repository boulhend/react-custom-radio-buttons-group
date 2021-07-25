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

require("../style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function RadioButtonGroup(_ref) {
  let {
    onChange,
    defaultValue,
    hide,
    values
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
    calssName: "radio-overlay"
  }, values.map(value => /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    value: value,
    onChange: handleChange,
    defaultValue: defaultValue,
    currentValue: currentValue,
    hide: hide,
    key: value
  }, value))));
}