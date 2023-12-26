const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // let a = 10;

  // let b = 20;

  // a = b;
  return res.send("hello world world");
});

console.log("test1");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("test2");
