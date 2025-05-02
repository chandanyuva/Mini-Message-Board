const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    const messages = req.messages;
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

module.exports = newMessageRouter;
