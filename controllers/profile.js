const Stat = require("../models/Stat")
const Player = require("../models/Player")

module.exports = {

    getProfile: async (req, res) => {
        try {
            const stats = await Stat.find({ user: req.user.id });
            res.render("profile.ejs", { stats: stats, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createPlayer: async (req, res) => {
        try {
            let array = req.body.data
            array.forEach(async (el) => {
                await Player.create({
                    playerNumber: el.playerNumber,
                    firstName: el.firstName,
                    lastName: el.lastName,
                    user: req.body.user.id,
                });
                console.log("Player has been added!");

            })

        } catch (err) {
            console.log(err);
        }
    },


}