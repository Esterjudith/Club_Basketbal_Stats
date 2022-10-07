const Player = require("../models/Player")

module.exports = {
    getPlayer: async (req, res, next) => {
        try {
            const player = await Player.find({ user: req.user.id });
            res.render("players.ejs", { players: player, user: req.user }) //renders the player's page with the objects in the object above.
        } catch (err) {
            console.log(err);
        }
    },
    addPlayer: async (req, res) => {
        try {
            await Player.create({
                playerNumber: req.body.playerNumber,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                team: req.body.team,
                points: 0,
                rebounds: 0,
                steals: 0,
                assists: 0,
                blocks: 0,
                user: req.user.id,
            })
            console.log("Player has been added!");
            res.render("players.ejs");
        } catch (err) {
            console.log(err)
        }
    },
    addPoint: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                $inc: { points: 1 },
            })
            console.log("points +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addRebound: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                $inc: { rebounds: 1 },
            })
            console.log("rebound +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addAssist: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                $inc: { assists: 1 },
            })
            console.log("assist +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addSteal: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                $inc: { steals: 1 },
            })
            console.log("steal +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    }

}