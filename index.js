const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routers/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Running Server on PORT:", PORT);
});
