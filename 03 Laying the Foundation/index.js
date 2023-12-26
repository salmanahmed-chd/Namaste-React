import React from "react";
import ReactDOM from "react-dom/client";

/*

const element = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

*/

/*

const jsxElement = <h1 id="heading">Namaste React using JSX 🚀</h1>;

const jsxElement = (<h1 id="heading">Namaste React using JSX 🚀</h1>);

const jsxElement = (
  <h1 id="heading">Namaste React using JSX 🚀</h1>
);

if the JSX element is in multiline it is wrapped with bracket ()

*/

// React Functional Component

/*

const fn1 = () => {
  return true;
}

const fn2 = () => true;

Both above correctly written

*/

/*

const HeadingComponent = () => {
  return <h1 id="heading">Namaste React 🚀 Functional Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>) // Rendering the component

*/

const Title = () => <h1>Namaste React 🚀</h1>;

const title = <h3>This is JS in JSX</h3>;

const HeadingComponent = () => {
  return (
    <div id="container">

      {/* Writing component inside component */}
      <Title />
      <Title></Title>
      {Title()}

      <h2>This is a Functional Component</h2>

      {/* We can write JS in JSX with help of {} as title is a JS variable */}
      {title}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
