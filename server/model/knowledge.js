const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
if (mongoose.connection.readyState == 0) {

    mongoose.connect('mongodb://localhost:27017/mySite');
}

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

var knowledgeSchema = new mongoose.Schema({
        title: String,
        content1: String,
        content2: String,
        frontend: [],
        backendAndDb: [],
        anotherSkills: []
}, {
        versionKey: false
    });

var knowledge = mongoose.model('knowledge', knowledgeSchema);

function getAll(cb) {
    knowledge.find({}, cb);
}
function addNewknowledge(newknowledge, cb) {
    knowledge(newknowledge).save(cb);
}
function deleteknowledgeByTitle(knowledgeTitle, cb) {
    knowledge.deleteOne({ title: knowledgeTitle }, cb);
}
function updateknowledgeByTitle(title, projectData, cb) {
	knowledge.updateOne({ Title: title }, { $set:projectData }, cb);
}


module.exports = {
    getAll: getAll,
    addNewknowledge: addNewknowledge,
    deleteknowledgeByTitle: deleteknowledgeByTitle,
    updateknowledgeByTitle: updateknowledgeByTitle
}
