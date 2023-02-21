'use strict';

var React = require('react');

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", null, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("p", null, children);
};

exports.Button = Button;
exports.Text = Text;
