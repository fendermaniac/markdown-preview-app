import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import marked from 'marked';
import './App.css';

class App extends Component {

  state = {
    markdown: `# Welcome to my React Markdown Previewer!
This is an H1
=============

## This is an H2



This is [an example](http://example.com/ "Title") inline link.

This is a normal paragraph:

  This is a code block.

Inline \`code\` has \`back-ticks around\` it.

*   Red
*   Green
*   Blue

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`


![React Logo w/ Text](https://goo.gl/Umyytc)`,
renderedMarkdown: ''
  };

  updateMarkdown(e) {
    this.setState({ markdown: e.target.value });
    const rendered = marked(e.target.value);
    this.setState({ renderedMarkdown: rendered });
  }

  componentDidMount() {
    this.setState({
      renderedMarkdown: marked(this.state.markdown)
    })
  }


  render() {
    return (
      <div>
        <div className="split left">
          <Editor markdown = {this.state.markdown}/>
        </div>
        <div className="split right">
          <Preview markdown = {this.state.markdown} renderedMarkdown = {this.state.renderedMarkdown}/>
        </div>     
      </div>
    );
  }
}

export default App;
