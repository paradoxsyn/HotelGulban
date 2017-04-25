var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
    contact: String,
    raidtimes: Boolean,
    roles: String,
    armory: String,
    logs: String,
    lint: String

});

var Application = mongoose.model('Application', appSchema);

module.exports = Application;
