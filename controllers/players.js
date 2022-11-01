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
            res.redirect("/profile");
        } catch (err) {
            console.log(err)
        }
    },
    updatePlayer: async (req, res, next) => {
        try {
            const id = req.params.id
            const onePlayer = await Player.findById(id).exec()
            console.log("Player has been updated")
            res.render('updatePlayer', {
                player: onePlayer
            })

        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    deletePlayer: async (req, res) => {
        try {
            // Find post by id

            // Delete post from db
            const player = await Player.remove({ _id: req.params.id });
            console.log("Deleted Player");
            res.redirect("/profile");
        } catch (err) {
            res.redirect("/profile");
        }
    },
    addPoint: async (req, res) => {
        try {

            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { points: 1 },
                },
                {
                    new: true,
                    runValidators: true
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
                _id: req.params.id
            },
                {
                    $inc: { rebounds: 1 },
                },
                {
                    new: true,
                    runValidators: true
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
                _id: req.params.id
            },
                {
                    $inc: { assists: 1 },
                },
                {
                    new: true,
                    runValidators: true
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
                _id: req.params.id
            },
                {
                    $inc: { steals: 1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("steal +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addBlock: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { blocks: 1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("block +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    deletePoint: async (req, res) => {
        try {

            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { points: -1 },
                },
                {
                    new: true,
                    runValidators: true
                })
            console.log("points -1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    deleteRebound: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { rebounds: -1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("rebound -1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    deleteSteal: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { steals: -1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("steal -1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    deleteAssist: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { assists: -1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("assist -1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    deleteBlock: async (req, res) => {
        try {
            await Player.findOneAndUpdate({
                _id: req.params.id
            },
                {
                    $inc: { blocks: -1 },
                },
                {
                    new: true,
                    runValidators: true
                })

            console.log("block -1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    }

}