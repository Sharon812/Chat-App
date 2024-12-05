const { server } = require("socket.io");
const express = require("express");
const app = express();
app.use(express.static("public"));

const unroute = require("./routes/unroute");

app.use("/", unroute);

app.listen(2000, () => {
  console.log("server started");
});
