'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('../api.js');

var _api2 = _interopRequireDefault(_api);

var _cookie = require('../cookie.js');

var _cookie2 = _interopRequireDefault(_cookie);

var _goTo = require('../util/goTo.js');

var _goTo2 = _interopRequireDefault(_goTo);

var _list = require('../util/list.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message() {
    _classCallCheck(this, Message);
  }

  _createClass(Message, null, [{
    key: 'getAll',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(locationId) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.get('locations/' + locationId + '/messages', _cookie2.default.getCookie('session'));

              case 2:
                response = _context.sent;

                if (!(response.status >= 200 && response.status < 300)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', response.data);

              case 5:
                if (response.status === 403) {
                  _cookie2.default.clearCookies();
                  (0, _goTo2.default)('/');
                }

                return _context.abrupt('return', []);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll(_x) {
        return _ref.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: 'post',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(locationId, message) {
        var hash, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                hash = _cookie2.default.getCookie('session');
                _context2.next = 3;
                return _api2.default.post('locations/messages', JSON.stringify({
                  senderUserId: _cookie2.default.getCookie('user'),
                  locationId: locationId,
                  message: message
                }), hash);

              case 3:
                response = _context2.sent;

                if (!(response.status >= 200 && response.status < 300)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', true);

              case 6:
                if (response.status === 403) {
                  _cookie2.default.clearCookies();
                  (0, _goTo2.default)('/');
                }

                return _context2.abrupt('return', false);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function post(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return Message;
}();

exports.default = Message;