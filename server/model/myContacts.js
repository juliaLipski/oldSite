const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
if (mongoose.connection.readyState == 0) {

    mongoose.connect('mongodb://localhost:27017/mySite');
}

var myContactsSchema = new mongoose.Schema({
    city: String,
    lat: Number,
    long: Number,
    email: String,
    phone: String,
}, {
        versionKey: false
    });

var myContacts = mongoose.model( 'myContacts', myContactsSchema);

function getMyContacts(cb) {
 myContacts.find({}, cb);
}
function addmyContacts(newmyContacts, cb) {
 myContacts(newmyContacts).save(cb);
}
function deleteMyContactsByTitle(myContactTitle, cb) {
 myContacts.deleteOne({ title: myContactTitle }, cb);
}
function updatMyContactsByTitle(title, projectData, cb) {
 myContacts.updateOne({ Title: title }, { $set:projectData }, cb);
}


module.exports = {
    getMyContacts: getMyContacts,
    addmyContacts: addmyContacts,
    deleteMyContactsByTitle: deleteMyContactsByTitle,
    // updat myContactsByTitle: updat myContactsByTitle
}
