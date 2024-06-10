const express = require("express");
const app = express();

app.get("/:msg", (req, res) => {
  res.send(req.params.msg);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
