import App from "@pages/App";
import fs from "fs";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

export const generateReactAppHTML = async (location) => {
  const reactApp = renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );

  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHTML = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );

  return reactHTML;
};
