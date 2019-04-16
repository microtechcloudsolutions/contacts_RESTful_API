const express = require('express');
const router =express.Router();
const contact = require('../controllers/contacts');



router.get('/api/contacts',contact.findAll);
router.get('/api/contact/:number',contact.findOne);
router.post('/api/contact',contact.createOne);
router.patch('/api/contact/:number',contact.updateOne);
router.delete('/api/contact/:number',contact.deleteOne);
router.post('/api/contacts',contact.createMore);
module.exports = router;
