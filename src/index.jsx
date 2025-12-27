import App from "@pages/App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const { hydrateRoot } = require("react-dom/client");

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
