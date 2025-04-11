const mongoose = require ("mongoose");

const Schema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password:{type: String, require: true},
    cart_Data:{type: Object, require: true},
    date:{type: Date, default:Date.now}
});

module.exports = mongoose.model("User", Schema);