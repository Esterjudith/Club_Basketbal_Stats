const Player = require("../models/Player")

module.exports = {
    getPlayer: async (req, res, next) => {
        try {
            const list = await Player.find().exe();
            res.render("players", {
                players: list
            }); //renders the player's page with the objects in the object above.
        } catch (err) {
            console.log(err);
        }
    },
    addPlayer: async (req, res) => {
        try {
            await Player.create({
                playerNumber: req.body.playerNumber,
                fistName: req.body.firstName,
                lastName: req.body.lastName,
                user: req.user.id,
            })
            console.log("Player has been added!");
            res.render("players.ejs");
        } catch (err) {
            console.log(err)
        }
    }
}