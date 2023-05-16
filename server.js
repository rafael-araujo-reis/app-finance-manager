const express = require("express");
const path = require("path");
const app = express();
const appName = process.env.npm_package_name;
const outputPath = `${__dirname}/dist/${{ appName }}`;

console.log("saida: ", outputPath);
window.log("saida w: ", outputPath);

app.use(express.static(outputPath));
app.get("/*", (req, res) => {
  res.sendFile(path.join(`${outputPath}/index.html`));
});

app.listen(process.env.PORT);
