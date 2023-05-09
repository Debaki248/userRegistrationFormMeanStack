const express = require('express');
const router = express.Router();
const ctrlUser = require('../controller/userController');
router.post('/register',ctrlUser.register);

module.exports = router;