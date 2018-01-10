const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
if (mongoose.connection.readyState == 0) {

    mongoose.connect('mongodb://localhost:27017/mySite');
}

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

var myProjectsSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    link: String
}, {
        versionKey: false
    });

// var Post = mongoose.Schema({
//    image: {data: Buffer, contentType: String}
// });
// "image:     {"data:BinData(0,"iVBORw0KGgoAAAANSUhEUE....(I
// just cut off the rest of the code.. cuz it was too long)          
// rkJggg=="), 
// "contentType" : "image/png" } 
// var path = 'upload/profiles/' +req.body.userId + '_profile.jpg';
//       fs.writeFile(path, base64data, function(err) {
//         if (err) return next(err);
//         User.findByIdAndUpdate({
//           _id: req.body.userId
//         }, {
//           $set: {
//             profileImg: 'upload/profiles/' +req.body.userId + '_profile.jpg'
//           }
//         }, function(err, user) {
//           if (err) return next(err);
//           return res.send(user);
//         });
//       });

//   <img ng-src="savedpath">


// var post= new Post({ });
// post.image.data=fs.readFileSync(req.file.path);
// post.image.contentType='image/png';

var myProjects = mongoose.model('myProjects', myProjectsSchema);

function getAllmyProjects(cb) {
    myProjects.find({}, cb);
}
function addNewmyProjects(newmyProjects, cb) {
    myProjects(newmyProjects).save(cb);
}
function deletemyProjectByTitle(myProjectTitle, cb) {
    myProjects.deleteOne({ title: myProjectTitle }, cb);
}
function updateMyProjectsByTitle(title, projectData, cb) {
    myProjects.updateOne({ Title: title }, { $set: projectData }, cb);
}


module.exports = {
    getAllmyProjects: getAllmyProjects,
    addNewmyProjects: addNewmyProjects,
    deletemyProjectByTitle: deletemyProjectByTitle
    // updatemyProjectsByTitle: updatemyProjectsByTitle
}
