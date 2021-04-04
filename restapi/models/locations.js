const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: [Number],
    state: String,
    country: String
})

module.exports = mongoose.model("Location", schema)