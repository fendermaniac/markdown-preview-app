var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function Editor(props) {
  return (
    React.createElement("div", null,
      React.createElement("h1", null, "Editor"),
      React.createElement("textarea", { id: "editor", value: props.markdown, onInput: props.updateMarkdown },
        props.markdown)));



}var

Preview = function (_React$Component) {_inherits(Preview, _React$Component);function Preview() {_classCallCheck(this, Preview);return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));}_createClass(Preview, [{ key: "createMarkup", value: function createMarkup()
    {
      return { __html: marked(this.props.markdown) };
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "Preview"),
          React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.createMarkup() })));


    } }]);return Preview;}(React.Component);var


Markdown = function (_React$Component2) {_inherits(Markdown, _React$Component2);
  function Markdown(props) {_classCallCheck(this, Markdown);var _this2 = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this,
    props));
    _this2.state = {
      markdown: "# Welcome to my React Markdown Previewer!\nThis is an H1\n=============\n\n## This is an H2\n\n\n\nThis is [an example](http://example.com/ \"Title\") inline link.\n\nThis is a normal paragraph:\n\n    This is a code block.\n\nInline `code` has `back-ticks around` it.\n\n*   Red\n*   Green\n*   Blue\n\n> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n> \n> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n> id sem consectetuer libero luctus adipiscing.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n\n\n![React Logo w/ Text](https://goo.gl/Umyytc)" };




































    _this2.updateMarkdown = _this2.updateMarkdown.bind(_this2);
    _this2.renderMarkdown = _this2.renderMarkdown.bind(_this2);return _this2;
  }_createClass(Markdown, [{ key: "updateMarkdown", value: function updateMarkdown(

    e) {
      this.setState({ markdown: e.target.value });
      var rendered = marked(e.target.value);
      this.setState({ renderedMarkdown: rendered });
    } }, { key: "renderMarkdown", value: function renderMarkdown()

    {} }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "markdown" },
          React.createElement(Editor, {
            markdown: this.state.markdown,
            updateMarkdown: this.updateMarkdown,
            renderMarkdown: this.renderMarkdown }),

          React.createElement(Preview, { markdown: this.state.markdown })));


    } }]);return Markdown;}(React.Component);


ReactDOM.render(React.createElement(Markdown, null), document.getElementById("root"));