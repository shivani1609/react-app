import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// JSX => Babel Transpiler => React.createElement() => React Element- JS Object => React DOM; HTMLRenderer => HTML Element => Browser DOM
// React Element is a JS Object which is used to create HTML Element in the Browser DOM using ReactDOM.render() method.
const Title = () => (
    <h1 id="title" className="heading">
        Hello React JSX
    </h1>
);

// React Functional Component is a JS Function which returns React Element(JS Object) and it is used to create HTML Element in the Browser DOM using ReactDOM.render() method.
const HeadingComponent = () => (
    <div>
         {/* Component Composition - A component can be used inside another component. */}
        <Title />
        <h1>Heading Component</h1>
        <p>This is a paragraph inside the heading component.</p>
    </div>
);

const AppLayoutComponent = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);