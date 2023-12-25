import React from "react";
import ReactDom from "react-dom/client"

const rootContainer = document.createElement("div");
rootContainer.id = "root";

document.body.appendChild(rootContainer);

const element = React.createElement("h1", {}, "Namaste React!!!");

const root = ReactDom.createRoot(rootContainer);

root.render(element);