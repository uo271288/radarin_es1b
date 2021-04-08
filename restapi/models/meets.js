const mongoose = require("mongoose")

const schema = mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    location: [Number],
    state: String,
    country: String
})

module.exports = mongoose.model("Meet", schema)