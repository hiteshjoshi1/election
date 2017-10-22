/**
 *@author hitjoshi@deloitte.com
 * All routes are defined here
 * For further drill down go to respective files
 */
var express = require('express');
var router = express.Router();

var userSchema = require('../models/userSchema.js');



router.use('/user', require('./routes/user'));
// router.use('/home', require('./routes/home'));
module.exports = router
