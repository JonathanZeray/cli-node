const express = require("express");
const app = express();

app.get("/:msg", (req, res) => {
  res.send(req.params.msg);
});

app.listen(3000);
