const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: Mixed
})

module.exports = mongoose.model("Location", schema)