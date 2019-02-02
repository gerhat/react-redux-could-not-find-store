"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.default = exports.LOGOUT = exports.LOGIN = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Initial state
var initialState = {
  isLoggedIn: false,
  username: null
}; // Actions

var LOGIN = 'my-private-package/LOGIN';
exports.LOGIN = LOGIN;
var LOGOUT = 'my-private-package/LOGOUT'; // Reducer

exports.LOGOUT = LOGOUT;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOGIN:
      return _objectSpread({}, state, {
        isLoggedIn: true,
        username: 'j.doe'
      });

    case LOGOUT:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        username: null
      });

    default:
      return state;
  }
};

var _default = reducer; // Action Creators

exports.default = _default;

var login = function login() {
  return {
    type: LOGIN
  };
};

exports.login = login;

var logout = function logout() {
  return {
    type: LOGOUT
  };
};

exports.logout = logout;