'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gist = function (_Component) {
  _inherits(Gist, _Component);

  function Gist(props) {
    _classCallCheck(this, Gist);

    var _this = _possibleConstructorReturn(this, (Gist.__proto__ || Object.getPrototypeOf(Gist)).call(this, props));

    _this.addStylesheet = function (href) {
      if (!_this.stylesheetAdded) {
        _this.stylesheetAdded = true;
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = href;

        document.head.appendChild(link);
      }
    };

    _this.gist = props.id;
    _this.file = props.file;
    _this.stylesheetAdded = false;
    _this.state = {
      loading: true,
      src: ''
    };
    return _this;
  }

  // The Gist JSON data includes a stylesheet to add to the page
  // to make it look correct. `addStylesheet` ensures we only add
  // the stylesheet one time.


  _createClass(Gist, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Create a JSONP callback that will set our state
      // with the data that comes back from the Gist site
      var gistCallback = Gist.nextGistCallback();
      window[gistCallback] = function (gist) {
        this.setState({
          loading: false,
          src: gist.div
        });
        this.addStylesheet(gist.stylesheet);
      }.bind(this);

      var url = 'https://gist.github.com/' + this.props.id + '.json?callback=' + gistCallback;
      if (this.props.file) {
        url += '&file=' + this.props.file;
      }

      // Add the JSONP script tag to the document.
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      document.head.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.loading) {
        return _react2.default.createElement(
          'div',
          null,
          'loading...'
        );
      } else {
        return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.src } });
      }
    }
  }]);

  return Gist;
}(_react.Component);

Gist.propTypes = {
  id: _propTypes2.default.string.isRequired, // e.g. "username/id"
  file: _propTypes2.default.string // to embed a single specific file from the gist


  // Each time we request a Gist, we'll need to generate a new
  // global function name to serve as the JSONP callback.
};var gistCallbackId = 0;
Gist.nextGistCallback = function () {
  return 'embed_gist_callback_' + gistCallbackId++;
};

exports.default = Gist;