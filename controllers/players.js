const Player = require("../models/Player")

module.exports = {
    createPlayer: async (req, res) => {
        try {
            await Player.create({
                playerNumber: req.body.playerNumber,
                fistName: req.body.firstName,
                lastName: req.body.lastName,
                user: req.user.id,
            })
            console.log("Player has been added!");
            res.redirect("/profile");
        } catch (err) {
            console.log(err)
        }
    }
}