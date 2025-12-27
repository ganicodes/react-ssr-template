import { generateReactAppHTML } from "@utils";
import express from "express";

const app = express();

app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3000;

app.get("/{*splat}", async (req, res) => {
  const reactHTML = await generateReactAppHTML(req.url);
  res.status(200).send(reactHTML);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
