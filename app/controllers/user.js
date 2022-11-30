const Users = require("../models/User");
const formatInfo = require("./formatInfo");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const getAdmins = async (req, res) => {
    try {
        const admins = await Users.find({
            isAdmin: true
        });
        res.status(200).json(admins);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const editAuthUser = async (req, res) => {
    try {
        if (req.body.userId === "63732bf8a52d537c1435c2e0") {
            await Users.updateOne({
                _id: req.params.id
            }, {
                $set: {
                    isAdmin: req.body.isAdmin
                }
            });
            res.status(200).json("Edit auth success!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const getUsers = async (req, res) => {
    let users = [{
            id: "1",
            name: "Tran Thanh Luong"
        },
        {
            id: "2",
            name: "Tran Thanh Luong"
        },
        {
            id: "3",
            name: "Tran Thanh Luong"
        },
        {
            id: "4",
            name: "Tran Thanh Luong"
        }
    ];
    /* const allUsers = await Users.find();
    for (let item of allUsers) {
        if (item.isAdmin === false) {
            await users.push(formatInfo(item));
        }
    } */
    res.status(200).json(users);
};


const createUser = async (req, res) => {
    /* var newStudentId;
    if (students.length == 0) {
        newStudentId = 1;
    }
    newStudentId = students[students.length - 1].id + 1; */
    try {
        const {
            firstName,
            lastName,
            email,
            gender,
            address,
            city,
        } = req.body;

        const newUser = new Users({
            firstName,
            lastName,
            email,
            gender,
            address,
            city,
        });
        await newUser.save();
        res.status(200).json(Users);
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        //Case while user change password
        if (req.body.password) {
            try {
                var salt = await bcrypt.genSalt(10);
                var hashedPassword = await bcrypt.hash(req.body.password, salt);
                req.body.password = hashedPassword;
            } catch (error) {
                res.status(500).json(error)
            }
        }
        //Not change password
        try {
            const {
                firstName,
                lastName,
                email,
                gender,
                address,
                city
            } = req.body
            await Users.findByIdAndUpdate(req.params.id, {
                $set: {
                    firstName,
                    lastName,
                    email,
                    gender,
                    address,
                    city
                }
            })
            res.status(200).json("User updated success!")
        } catch (error) {
            res.status(500).json(error)
        }
    } else if (req.body.userId = "63732bf8a52d537c1435c2e0") {
        await Users.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
    } else {
        res.status(403).json("You can delete only your account!!!")
    }
}


const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.userId === "63732bf8a52d537c1435c2e0") {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!")
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getAdmins,
    editAuthUser,
};