const express = require('mongoose')
const router = express.Router()

router.use('/', require('./application.js'));
router.use('/question', require('./question.js'));
router.use('/user', require('./user.js'));







router.all('*', (req, res) => {
    res.status(404).send();
});

module.exports = router;