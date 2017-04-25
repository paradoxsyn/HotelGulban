var App = require('../models/application');

// BlogPostController represents an empty constructor.
var AppController = function() {};

/**
 * listAllApps returns the list of all applications in the Mongo database.
 *
 * @param {function} callback Callback is a function returned back to the
 *					 place where addPost was called. It returns an error
 *					 and a response.
 * @return {function} Return is just used to stop the function.
 */
AppController.listAllApps = function(callback) {
    App.find({}, function(err, application) {
        if (err) {
            console.log('Error in finding users: ' + err);
            return callback(err, null);
        } else {
            return callback(null, application);
        }
    });
};

/**
 * With AppController.addPost, you can add new applications.
 *
 * @param {object} data Data contains the userId, title, and post of the
 *					 	submitted application
 * @param {function} callback Callback is a function returned back to the
 *					 place where addPost was called. It returns an error
 *					 and a response.
 * @return {function} Return is just used to stop the function.
 */
AppController.addApp = function(data, callback) {
    var newApplication = new App();

    newApplication.contact = data.contact;
    newApplication.raidtimes = data.raidtimes;
    newApplication.roles = data.roles;
    newApplication.armory = data.armory;
    newApplication.logs = data.logs;
    newApplication.lint = data.lint;

    newApplication.save(function(err) {
        if (err) {
            console.log('Error in saving Application: ' + err);
            return callback(err, null);
        } else {
            return callback(null, newApplication);
        }
    });
};

/**
 * listYourUsers only returns your user's info in the Mongo database that
 *		correspond to your userId.
 *
 * @param {string} username This is your logged in user's id.
 * @param {function} callback Callback is a function returned back to the
 *					 place where addApp was called. It returns an error
 *					 and a response.
 * @return {function} Return is just used to stop the function.
 */
AppController.listYourApp = function(username, callback) {
    User.find({username: application}, function(err, yourApps) {
        if (err) {
            console.log('Error in finding your apps: ' + err);
            return callback(err, null);
        } else {
            return callback(null, yourApps);
        }
    });
};

module.exports = AppController;
