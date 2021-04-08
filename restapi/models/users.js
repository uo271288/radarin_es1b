const mongoose = require("mongoose")


const schema = mongoose.Schema({
    name: String,
    webID: String
})

module.exports = mongoose.model("User", schema)