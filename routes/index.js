const {Router} = require('express');

const router = Router();

router.use(require('./drinks.route'));

module.exports = router;