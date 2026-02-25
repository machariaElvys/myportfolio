import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/sections.css";
import "./styles/cards.css";
import "./styles/responsive.css";
import "./styles/modal.css";

document.documentElement.classList.add("js");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);