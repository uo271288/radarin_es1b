const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: [Number]
})

module.exports = mongoose.model("Location", schema)