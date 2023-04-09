const router = require('express').Router()
const { getEventData, postEventData } = require('../controllers/event')

router.get('/', (req, res) => {
    res.send("Welcome to TNCCC EVENTS API")
})

router.post('/events', postEventData)
router.get('/events', getEventData)

module.exports = router