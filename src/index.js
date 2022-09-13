const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("../src/routes/index.routes"));

app.listen(4000, () => {
    console.log("port :>> ", 4000);
});
