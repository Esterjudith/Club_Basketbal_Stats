const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    playerNumber: {
        type: Number,
        required: true,
    },


    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Player", PlayerSchema)