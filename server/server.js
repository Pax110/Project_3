import express from "express";

const app = express();
const port = 5001;

app.use("/", express.static("../client/build"));

app.use(express.json());

//Test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
