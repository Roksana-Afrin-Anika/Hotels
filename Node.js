const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Afrin Anika");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);
const serviceRoutes = require("./routes/seviceRoutes");
app.use("/service", serviceRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//comment added
