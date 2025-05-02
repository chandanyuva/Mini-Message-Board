const { Router } = require("express");

const indexRouter = Router();

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

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    // console.log(req.body.author);
    // console.log(req.body.message);
    const newMessage = {
        user: req.body.author,
        text: req.body.message,
        added: new Date(),
    };
    messages.push(newMessage);
    res.redirect("/");
});

indexRouter.get(`/messageDetails/:index`, (req, res) => {
    const index = req.params.index;
    const data = messages[index];
    // console.log(data);
    res.send(`date: ${data.added} | user: ${data.user} text: ${data.text}`);
});

module.exports = indexRouter;
