"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioButton;

var _react = _interopRequireWildcard(require("react"));

var _nameContext = _interopRequireDefault(require("../nameContext"));

require("../style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function RadioButton(_ref) {
  let {
    children,
    value,
    currentValue,
    onChange,
    defaultValue = value,
    hide = false
  } = _ref;
  const name = (0, _react.useContext)(_nameContext.default);
  const InputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (InputRef.current && InputRef.current.value === defaultValue) {
      InputRef.current.click();
    }
  }, [defaultValue]);
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "radio-button".concat(currentValue === value ? " active" : "")
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    onChange: onChange,
    ref: InputRef,
    style: {
      display: "none"
    }
  }), !hide && /*#__PURE__*/_react.default.createElement("div", {
    className: "dot".concat(currentValue === value ? " active" : "")
  }), children);
}