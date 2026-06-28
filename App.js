import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel Transpiler => React.createElement() => React Element- JS Object => React DOM; HTMLRenderer => HTML Element => Browser DOM
const jsxHeading = <h1 id="title">Hello React JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);