const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");

router.post("/", async(req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    Users.create({
        username: username,
        paswword: hashedPassword,
    });
    res.json("SUCCESS");
    //  bcrypt.hashSync(password, 10).then((hash) => {
    //      
    //      
    //  });
});


module.exports = router;