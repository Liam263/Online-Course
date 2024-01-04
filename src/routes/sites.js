const express = require('express');
const router = express.Router();

const SitesController = require('../app/controllers/SitesController');

router.get('/search', SitesController.search);
router.get('/', SitesController.home);

module.exports = router;
