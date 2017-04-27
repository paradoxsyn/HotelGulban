var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');


/**
 * If user is authenticated in the session, allow access to the page.
 *		If not, redirect the user to the log-in page.
 *	--TODO: MAKE ONLY FOR ADMINS
 */
/*var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};*/

var adminAuth = function(req,res,next) {
    var user = req.user;
    if(user.admin == true) {
        return next();
    }
    res.redirect('/');
};

/* GET users listing. */
router.get('/', adminAuth, function(req, res) {

    UserController.listAllUsers(function(err, username) {

        res.render('users', {title: 'User',
            user: username});
    });

});

module.exports = router;
