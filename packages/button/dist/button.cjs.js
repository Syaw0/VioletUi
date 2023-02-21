'use strict';

var React = require('react');

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button-module_button__HXqVu {\n  background-color: rgb(160, 130, 238);\n  border: none;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button-module_button__HXqVu:hover {\n  background-color: rgb(160, 130, 238, 0.4);\n  transition: background-color 0.5s;\n}\n";
var style = {"button":"button-module_button__HXqVu"};
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", {
    className: style.button
  }, children);
};

exports.Button = Button;
