const mongoose = require("mongoose")


const schema = mongoose.Schema({
    requester: String,
    target: String,
    status: String
})

module.exports = mongoose.model("Friend", schema)