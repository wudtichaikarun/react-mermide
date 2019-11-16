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
    return null;
  });

const notNull = R.filter(item => item !== null);

const joinWithSemicolon = R.join(";");

const tranfromArrayToMermaidChard = R.pipe(
  // 1
  arrayToChartFormat,
  R.tap(data => console.log("arrayToChartFormat", data)),
  // 2
  notNull,
  R.tap(data => console.log("notNull", data)),
  // 3
  joinWithSemicolon,
  R.tap(data => console.log("joinWithSemicolon", data))
);

function App() {
  return (
    <div className="App">
      <h1>React mermaid</h1>
      <section>
        <Mermaid chart={`graph LR; ${tranfromArrayToMermaidChard(arr)} `} />
      </section>
    </div>
  );
}

export default App;
