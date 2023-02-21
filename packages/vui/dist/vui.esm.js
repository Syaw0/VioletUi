import React from 'react';

function styleInject$1(css, ref) {
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
var css_248z$1 = ".button-module_button__HXqVu {\n  background-color: rgb(160, 130, 238);\n  border: none;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button-module_button__HXqVu:hover {\n  background-color: rgb(160, 130, 238, 0.4);\n  transition: background-color 0.5s;\n}\n";
var style$1 = {
  "button": "button-module_button__HXqVu"
};
styleInject$1(css_248z$1);
var Button = function Button(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("button", {
    className: style$1.button
  }, children);
};

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
var css_248z = ".text-module_text__VLLDt {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n";
var style = {
  "text": "text-module_text__VLLDt"
};
styleInject(css_248z);
var Text = function Text(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("p", {
    className: style.text
  }, children);
};

export { Button, Text };
//# sourceMappingURL=vui.esm.js.map
