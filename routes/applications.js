var express = require('express');
var router = express.Router();
var AppController = require('../controllers/ApplicationController');

/* If user is authenticated in the session, allow access to the page.
*		If not, redirect the user to the log-in page.
*	--TODO: MAKE ONLY FOR ADMINS
*/
var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};

/* GET users listing. */
router.get('/', isAuthenticated, function(req, res) {
    AppController.listAllApps(function(err,apps){
        res.render('apps', {title:'Applications',
            apps:apps,
            user:req.user})
    })
});

module.exports = router;
