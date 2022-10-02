const {Router} = require('express')
const {messagesControllers} = require('../controllers.js/messagesControllers')
const router = Router()


router.get('/messages', messagesControllers.getMessages)
router.put('/messages', messagesControllers.patchMessages)
  



module.exports  = router