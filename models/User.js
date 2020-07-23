const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    status: { type: String, default: '' }
});

module.exports = model('User', userSchema);

