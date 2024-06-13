const User = require("../models/user_model");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        mobile: req.body.mobile,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res, next) => {
    const { id, name, mobile, password, confirmpassword } = req.body;

    try {
        const updatedUser = await User.updateOne(
            { _id: id },
            { $set: { name, mobile, password, confirmpassword } }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deletedUser = await User.deleteOne({ _id: id });
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser,
};
