const {Router} = require('express')
const {contactsControllers} = require('../controllers/contactsControllers')

const router = Router();


router.get('/contacts', contactsControllers.getContacts)
router.delete('/contacts', contactsControllers.deleteContacts)


module.exports = router