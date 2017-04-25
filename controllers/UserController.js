var User = require('../models/user');

// BlogPostController represents an empty constructor.
var UserController = function() {};

/**
 * listAllUsers returns the list of all users in the Mongo database.
 *
 * @param {function} callback Callback is a function returned back to the
 *					 place where addPost was called. It returns an error
 *					 and a response.
 * @return {function} Return is just used to stop the function.
 */
UserController.listAllUsers = function(callback) {
    User.find({}, function(err, username) {
        if (err) {
            console.log('Error in finding users: ' + err);
            return callback(err, null);
        } else {
            return callback(null, username);
        }
    });
};

/**
 * listYourUsers only returns your user's info in the Mongo database that
 *		correspond to your userId.
 *
 * @param {string} username This is your logged in user's id.
 * @param {function} callback Callback is a function returned back to the
 *					 place where addPost was called. It returns an error
 *					 and a response.
 * @return {function} Return is just used to stop the function.
 */
UserController.listYourUsers = function(username, callback) {
    User.find({username: username}, function(err, yourUsers) {
        if (err) {
            console.log('Error in finding your users: ' + err);
            return callback(err, null);
        } else {
            return callback(null, yourUsers);
        }
    });
};

module.exports = UserController;