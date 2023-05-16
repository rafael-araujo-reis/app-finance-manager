const express = require("express");
const app = express();
const appName = "app-finance-manager";
const outputPath = `${__dirname}/dist/${{ appName }}`;

console.log("saida: ", outputPath);

app.use(express.static(outputPath));
app.get("/*", (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

app.listen(process.env.PORT);
