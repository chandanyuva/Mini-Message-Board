const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routers/indexRouter");
const newMessageRouter = require("./routers/newMessageRouter");
const messageDetailsRouter = require("./routers/messageDetailsRouter");

// console.log(indexRouter);
// console.log(newMessageRouter);
// console.log(messageDetailsRouter);
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.messages = messages; // Add messages to the request object
    next(); // Continue to the next middleware/route
});

app.use("/", indexRouter);
app.use("/newMessage", newMessageRouter);
app.use("/messageDetails", messageDetailsRouter);

const PORT = process.env.PORT || 3000;
// const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
    console.log(`Running Server on: http://${HOST}:${PORT}`);
});
