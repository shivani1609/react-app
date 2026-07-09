import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayoutComponent = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayoutComponent />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                "path": "/about",
                "element": <About />,
            },
            {
                "path": "/contact",
                "element": <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading..."><Grocery /></Suspense>
            }
        ]
    }
])


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



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);