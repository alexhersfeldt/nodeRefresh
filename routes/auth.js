const { Router } = require("express")
const passport = require("passport")
const User = require('../models/User')

const router = Router();

function ensureLogin(req, res, next) {
    if(!req.isAuthenticated) {
        return res.status(401).json({message: "Not Logged in"})
    }
}

router.get('/user', (req, res) => {
    if (req.user) {
        res.json(extractUser(req))
    } else {
        res.json({ user: null })
    }
})

router.post("/register", async (req, res, next) => {
    
    try {
        await User.register(new User({email: req.body.email}), req.body.password)
    
    } catch (err) {
        if (err.name === 'UserExistsError') {
            return res.status(400).json({ message: 'UserExistsError' })
        }
        return res.status(500).json({ message: err.message})
    }
    next()
    },
    passport.authenticate('local'), (req, res) => {
    res.json(extractUser(req))
})


router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(extractUser(req))
})


router.post('/logout', (req, res) => {
    if (req.user) {
        req.logOut()
        res.json({ message: 'Logged out' })
    } else {
        res.json({ message: 'No user to log out' })
    }
})


function extractUser(req) {
    const { email, _id } = req.user
    return { user: { email, _id } }
}

module.exports = router