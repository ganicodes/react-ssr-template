import App from "@pages/App";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";

export const generateReactAppHTML = async (location) => {
  console.log("location: ", location);
  // const reactApp = renderToString(
  //   <StaticRouter location={location}>
  //     <App />
  //   </StaticRouter>
  // );

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

  return reactHTML;
};
