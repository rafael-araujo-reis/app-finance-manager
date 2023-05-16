const express = require("express");
const path = require("path");
const app = express();
const appName = "app-finance-manager";
const outputPath = `${__dirname}/dist/${{ appName }}`;

app.use(express.static(outputPath));
app.get("/*", (req, res) => {
  res.sendFile(path.join(`${outputPath}/index.html`));
});

app.listen(process.env.PORT);
