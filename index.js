// Dependencies/API's
const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// Routes
const authRouter = require("./routes/admin/auth");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");
const adminProductsRouter = require("./routes/admin/products");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["sd8129jdksjdlj2910dsjakd"],
  })
);
app.use(authRouter);
app.use(productsRouter);
app.use(cartsRouter);
app.use(adminProductsRouter);


app.listen(3000, () => {
  console.log("Listening");
});
