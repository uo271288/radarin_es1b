const mongoose = require("mongoose")


const schema = mongoose.Schema({
    name: String,
    webId: String
})

module.exports = mongoose.model("User", schema)