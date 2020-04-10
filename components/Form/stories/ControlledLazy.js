"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultValue = {
  name: '',
  email: '',
  subscribe: false,
  ampm: '',
  size: '',
  comments: '',
  age: ''
};

var Example = function Example() {
  var _React$useState = _react["default"].useState(defaultValue),
      value = _React$useState[0],
      setValue = _React$useState[1];

  _react["default"].useEffect(function () {
    return setValue({
      name: 'initial',
      email: 'initial@my.com',
      subscribe: true,
      ampm: 'evening',
      size: 'large',
      comments: 'initial',
      age: 60
    });
  }, []);

  return _react["default"].createElement(_grommet.Grommet, {
    full: true,
    theme: _themes.grommet
  }, _react["default"].createElement(_grommet.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_grommet.Box, {
    width: "medium"
  }, _react["default"].createElement(_grommet.Form, {
    value: value,
    onChange: function onChange(nextValue) {
      console.log('Change', nextValue);
      setValue(nextValue);
    },
    onReset: function onReset() {
      return setValue(defaultValue);
    },
    onSubmit: function onSubmit(event) {
      return console.log('Submit', event.value, event.touched);
    }
  }, _react["default"].createElement(_grommet.FormField, {
    label: "Name",
    name: "name"
  }, _react["default"].createElement(_grommet.TextInput, {
    name: "name"
  })), _react["default"].createElement(_grommet.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, _react["default"].createElement(_grommet.MaskedInput, {
    name: "email",
    mask: [{
      regexp: /^[\w\-_.]+$/,
      placeholder: 'example'
    }, {
      fixed: '@'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'my'
    }, {
      fixed: '.'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'com'
    }]
  })), _react["default"].createElement(_grommet.FormField, {
    name: "subscribe"
  }, _react["default"].createElement(_grommet.CheckBox, {
    name: "subscribe",
    label: "Subscribe?"
  })), _react["default"].createElement(_grommet.FormField, {
    name: "ampm"
  }, _react["default"].createElement(_grommet.RadioButtonGroup, {
    name: "ampm",
    options: ['morning', 'evening']
  })), _react["default"].createElement(_grommet.FormField, {
    label: "Size",
    name: "size"
  }, _react["default"].createElement(_grommet.Select, {
    name: "size",
    options: ['small', 'medium', 'large']
  })), _react["default"].createElement(_grommet.FormField, {
    label: "Comments",
    name: "comments"
  }, _react["default"].createElement(_grommet.TextArea, {
    name: "comments"
  })), _react["default"].createElement(_grommet.FormField, {
    label: "Age",
    name: "age",
    pad: true
  }, _react["default"].createElement(_grommet.RangeInput, {
    name: "age",
    min: 15,
    max: 75
  })), _react["default"].createElement(_grommet.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, _react["default"].createElement(_grommet.Button, {
    label: "Cancel"
  }), _react["default"].createElement(_grommet.Button, {
    type: "reset",
    label: "Reset"
  }), _react["default"].createElement(_grommet.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Controlled lazy', function () {
  return _react["default"].createElement(Example, null);
});