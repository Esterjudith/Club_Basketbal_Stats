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
    }

}