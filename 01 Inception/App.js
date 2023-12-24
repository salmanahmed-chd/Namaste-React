const ulElement = React.createElement(
  "ul",
  {},
  React.createElement(
    "li",
    {
      class: "item1", //Giving attribute to element
    },
    "First Item"
  )
);

const uElement = React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "Second Item")
);

const heading = React.createElement("h1", {}, "Namaste React!!!");

const element = React.createElement("div", {}, [ulElement, uElement, heading]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
