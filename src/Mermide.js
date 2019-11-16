import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true
});

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

export default Mermaid;
