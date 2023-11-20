const express = require('express');
const dataController = require('../controller/dataController');

const router = express.Router();

// Route to handle the GET request for data
router.get('/', dataController.getData);
router.get('/matching', dataController.matchingData)
router.get('/search', dataController.searchData)



module.exports = router;