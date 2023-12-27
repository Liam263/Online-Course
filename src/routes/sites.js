const express = require('express');
const router = express.Router();

const SitesController = require('../app/controllers/SitesController');

router.use('/search', SitesController.search);
router.use('/', SitesController.home);

module.exports = router;
