import App from "@pages/App";
import express from "express";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const reactApp = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHTML = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );

  res.status(200).send(reactHTML);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
