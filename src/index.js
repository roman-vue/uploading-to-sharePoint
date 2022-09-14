const envi = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("../src/routes/index.routes"));

app.listen(app.get("port"), () => {
    console.log("port :>> ", `${app.get("port")} ${process.env.HEY}`);
});
