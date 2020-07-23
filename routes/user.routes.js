const { Router } = require("express");
const User = require("../models/User");

const userRouter = Router();

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так..(((' });
    }
});

module.exports = userRouter;