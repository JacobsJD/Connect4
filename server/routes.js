const controller = require('./controllers');
const router = require('express').Router();

router.get('/gameData', controller.gameData.get);
router.post('/gameData', controller.gameData.post);

module.exports = router;