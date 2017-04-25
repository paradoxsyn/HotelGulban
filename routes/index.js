var express = require('express');
var router = express.Router();
var passport = require('passport');
var AppController = require('../controllers/ApplicationController');



/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {title : 'Index',
        user: req.user
    });
});
/**
 * If user is authenticated in the session, allow access to the page.
 *		If not, redirect the user to the log-in page.
 */
var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};


/** POST handles login. */
router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
}));


/** GET sign up page. */
router.get('/signup', function(req, res){
    res.render('signup', {title: 'Sign up',
        message: req.flash('message')});
});

/** POST handles registration. */
router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash : true
}));


/* GET home page. */
router.get('/home', isAuthenticated, function(req, res){
    res.render('home', {title: 'Home',
        user: req.user});
});

router.get('/wow', isAuthenticated, function(req, res){
   res.render('wow', {title: 'Wow',
        user: req.user});
});

/**
 * POST handles creating a new Application.
 */
router.post('/wow', isAuthenticated, function(req, res) {
    var data = {
        contact: req.body.contact,
        raidtimes: req.body.raidtimes,
        roles: req.body.roles,
        armory: req.body.armory,
        logs: req.body.logs,
        lint: req.body.lint
    };

    // After adding a new post, redirect to /blogpost and see the update.
    AppController.addApp(data, function(err) {
        if (!err) {
            res.redirect('/home');
        }
    });
});


/* GET handles log out. */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

/* GET handles hotel. */
router.get('/hotel', function(req, res) {
    res.render('hotel',{title: 'WELCOME TO THE HOTEL'});
});



module.exports = router;