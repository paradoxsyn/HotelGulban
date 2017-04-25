var App = require('../models/application');

module.exports = function (req, done) {
        CreateApp = function () {
            if (err) {
                console.log('Error with submission' + err)
                return done(err);
            }
            var newApp = new App();

            //set app vars
            newApp.contact = req.param('contact');
            newApp.raidtimes = req.param('raidtimes');
            newApp.roles = req.param('roles');
            newApp.armory = req.param('armory');
            newApp.logs = req.param('logs');
            newApp.lint = req.param('lint');

            //save
            newApp.save(function (err) {
                if (err) {
                    console.log('Somethings up' + err);
                    throw err;
                }
                console.log('app sent');
                return done(null, newApp);
            })
        };
        /**
         * Delay the execution of findOrCreateUser and execute the method
         *      in the next tick of the event loop.
         */
        process.nextTick(CreateApp);
};