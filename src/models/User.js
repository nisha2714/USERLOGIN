const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNo: { type: String, required: true, match: /^[0-9]{10}$/ },
    emailId: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
    },
    loginId: { type: String, required: true, match: /^[a-zA-Z0-9]{8}$/ },
    password: { type: String, required: true, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ },
    creationTime: { type: Date, default: Date.now },
    lastUpdatedOn: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
