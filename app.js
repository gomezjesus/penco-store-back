const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data");
app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) {
    res.send(product);
    console.log(product);
  } else res.status(404).send({ msg: "Product Not Found" });
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
