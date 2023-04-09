const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Welcome to TNCCC EVENTS API")
})

module.exports = router