import App from "@pages/App";
import React from "react";
const { hydrateRoot } = require("react-dom/client");

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
