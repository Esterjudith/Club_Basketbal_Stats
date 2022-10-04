const Stat = require("../models/Stat")

module.export = {

    addPoint: async (req, res) => {
        try {
            await Stat.findOneAndUpdate({
                $inc: { onePoint: 1 },
            })
            console.log("points +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addRebound: async (req, res) => {
        try {
            await Stat.findOneAndUpdate({
                $inc: { rebound: 1 },
            })
            console.log("rebound +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addAssist: async (req, res) => {
        try {
            await Stat.findOneAndUpdate({
                $inc: { assist: 1 },
            })
            console.log("assist +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    },
    addSteal: async (req, res) => {
        try {
            await Stat.findOneAndUpdate({
                $inc: { steal: 1 },
            })
            console.log("steal +1")
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    }


}