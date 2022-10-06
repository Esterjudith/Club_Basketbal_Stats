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
    team: {
        type: String,
        require: false,
    },
    Point: {
        type: Number,
        require: true,
    },

    rebound: {
        type: Number,
        require: true,
    },

    steals: {
        type: Number,
        required: true,
    },
    assist: {
        type: Number,
        required: true,
    },
    blocks: {
        type: Number,
        required: true,
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