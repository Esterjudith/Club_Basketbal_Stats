const Stat = require("../models/Stat")
const Player = require("../models/Player")

module.exports = {

    getProfile: async (req, res) => {
        try {
            const player = await Player.find({ user: req.user.id });
            res.render("profile.ejs", { players: player, user: req.user })
        } catch (err) {
            console.log(err)
        }
    }

}