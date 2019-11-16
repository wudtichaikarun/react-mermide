import React from "react";
import * as R from "ramda";
import Mermaid from "./Mermide";
import "./index.css";

const arr = ["A", "B", "C", "D"];

const arrayToChartFormat = list =>
  list.map((item, index) => {
    if (list[index + 1]) {
      return `${item}-->${list[index + 1]}`;
    }
    return;
  });

const filterUndefined = R.filter(item => item != void 0);

const joinWithSemicolon = R.join(";");

const tranfromArrayToMermaidChard = R.pipe(
  // 1
  arrayToChartFormat,
  R.tap(data => console.log("arrayToChartFormat", data)),
  // 2
  filterUndefined,
  R.tap(data => console.log("filterUndefined", data)),
  // 3
  joinWithSemicolon,
  R.tap(data => console.log("joinWithSemicolon", data))
);

function App() {
  return (
    <div className="App">
      <h1>react mermaid 2</h1>
      <Mermaid chart={`graph LR; ${tranfromArrayToMermaidChard(arr)} `} />
    </div>
  );
}

export default App;
