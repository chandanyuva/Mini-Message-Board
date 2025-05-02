const { Router } = require("express");
const messageDetailsRouter = Router();

messageDetailsRouter.get(`/:index`, (req, res) => {
    const messages = req.messages;
    const index = req.params.index;
    const data = messages[index];
    // console.log(data);
    res.send(`date: ${data.added} | user: ${data.user} text: ${data.text}`);
});

module.exports = messageDetailsRouter;
