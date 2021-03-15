const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: mongoose.Schema.Types.Mixed
})

module.exports = mongoose.model("Location", schema)