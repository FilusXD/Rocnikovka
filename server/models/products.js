
const mongoose = require ("mongoose");

const Schema = mongoose.Schema({
    name: {type: String, require: true},
    platform: {type: String, require: true},
    developer: {type: String, require: true},
    price:{type: Number, require: true}
});

module.exports = mongoose.model("Product", Schema);