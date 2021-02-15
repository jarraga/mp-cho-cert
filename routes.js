// route
const { Router } = require('express')
const router = Router()

const { createPreference } = require('./controllers/createPreference')
router.post('/createPreference', createPreference)

const { webHook } = require('./controllers/webHook')
router.post('/webHook', webHook)

module.exports = router