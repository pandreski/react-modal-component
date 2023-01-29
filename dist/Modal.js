"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _close = _interopRequireDefault(require("./assets/close.svg"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0,0,0,0.7);\n  box-sizing: border-box;\n"])));
var ModalBlock = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  background-color: #fff;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  z-index: 999;\n  padding: 30px;\n"])));
var CloseButton = _styled.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-radius: 0;\n  width: ", "px;\n  height: ", "px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  bottom: calc(100% + 1em);\n  right: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

/**
 * Simple modal component displaying its children as content.
 * 
 * @param {Node} children                     Modal content (React element).
 * @param {Boolean} isOpen                    Component state.
 * @param {Function} onClose                  Close callback function.
 * @param {String} closeIcon                  Image path for close button.
 * @param {(String | Number)} closeIconSize   Close icon size (square) in pixel.
 * @returns {ReactComponentElement}
 */
function Modal(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    closeIcon = _ref.closeIcon,
    closeIconSize = _ref.closeIconSize;
  var handleOutsideClick = function handleOutsideClick(e) {
    // Close modal if the user click outside of the modal's content.
    if (isOpen && e.target.classList.contains('modalWrapper')) {
      e.preventDefault();
      onClose(e);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    // Close modal on "Escape" key press.
    if (isOpen && e.key === 'Escape') {
      e.preventDefault();
      onClose(e);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen ? /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "modalWrapper",
    role: "dialog",
    "aria-hidden": isOpen,
    onClick: handleOutsideClick
  }, /*#__PURE__*/_react.default.createElement(ModalBlock, {
    tabIndex: 1
  }, /*#__PURE__*/_react.default.createElement(CloseButton, {
    onClick: onClose,
    size: closeIconSize
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: closeIcon,
    alt: "Close"
  })), children)) : null);
}
Modal.propTypes = {
  children: _propTypes.default.node.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  closeIcon: _propTypes.default.string,
  closeIconSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
Modal.defaultProps = {
  closeIcon: _close.default,
  closeIconSize: 30
};
var _default = Modal;
exports.default = _default;