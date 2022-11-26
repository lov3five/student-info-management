const Users = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        var salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Users({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({
            message: "User created successfully"
        });
    } catch (error) {
        console.log(error);
    }
}

// LOGIN
const login = async (req, res) => {
    try {
        const user = await Users.findOne({
            email: req.body.email
        });
        !user && res.status(404).json("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong password");
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register,
    login
}