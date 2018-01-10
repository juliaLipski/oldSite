// "use strict";
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// if (mongoose.connection.readyState == 0) {

//     mongoose.connect('mongodb://localhost:27017/mySite');
// }
// const bcrypt = require('bcrypt');
// const SALT_WORK_FACTOR = 10;
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isadmin: Boolean,
//     created_at: { type: Date, default: Date.now }
//     //   location: String,
//     //   meta: {
//     //     age: Number,
//     //     website: String
//     //   },
//     //   created_at: Date,
//     //   updated_at: Date
// }
//     , {
//         versionKey: false
//     });
// userSchema.pre('save', function (next) {
//     var user = this;
//     if (!user.isModified('password')) return next();
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//         if (err) return next(err);
//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function (err, hash) {
//             if (err) return next(err);
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });


// });

// userSchema.methods.comparePassword = function (candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
// // the schema is useless so far
// // we need to create a model using it
// var users = mongoose.model('users', userSchema);
// function getAllUers(cb) {
//     users.find({}, cb);
// }
// function getUserByName(user, cb) {
//     console.log(33)
//     users.findOne({ username: user.username },function (err, user) {
//         console.log(44)
//         if (err) return err;
//         if (!user) return  'Incorrect username.'
//         // done(null, false, { message: 'Incorrect username.' });
//         user.comparePassword(user.password, function (err, isMatch) {
//             if (isMatch) {
//                 return user;
//             } else {
//                 return 'Incorrect password.';
//             }
//         });
//     });

// }
// function addNewUser(newmUser, cb) {
//     users(newmUser).save(cb);
// }
// function deleteUserById(id, cb) {
//     users.deleteOne({ id: id }, cb);
// }
// function updateuserByTitle(title, projectData, cb) {
//     users.updateOne({ Title: title }, { $set: projectData }, cb);
// }


// module.exports = {
//     getAllUers: getAllUers,
//     addNewUser: addNewUser,
//     deleteUserById: deleteUserById,
//     getUserByName: getUserByName
//     // updateuserByTitle: updateuserByTitle
// }
// // make this available to our users in our Node applications
// // module.exports = users;