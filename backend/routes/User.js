const express = require("express");
const UserModel = require("../models/user");
const routes = express.Router();

routes.post("/user/signup", async (req, res) => {
    const userData = req.body;
    try {
        const user = new UserModel(userData);
        const newUser = await user.save();
        res.status(201).send({
            message: "User created successfully.",
            user_id: newUser._id,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

routes.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ status: false, message: "Invalid email and password" });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).send({ status: false, message: "Invalid email and password" });
        }

        res.status(200).send({
            message: "Login successful.",
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = routes;
