var express = require('express');
var router = express.Router();
const mdb = require('../model/users.js');
// const config = require('./config');
// const bcrypt = require('bcrypt');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const _ = require('lodash');
// function checkAuth (req, res, next) {
//     passport.authenticate('jwt', { session: false }, (err, decryptToken, jwtError) => {
//         if(jwtError != void(0) || err != void(0)) return res.render('index.html', { error: err || jwtError});
//         req.user = decryptToken;
//         next();
//     })(req, res, next);
// }

// function createToken (body) {
//     return jwt.sign(
//         body,
//         config.jwt.secretOrKey,
//         {expiresIn: config.expiresIn}
//     );
// }

// router.get("/", (req, res) => {
//   mdb.getAllUers(function (err, data) {
//     console.log(data)
//     res.json(data)
//   });
// });

// router.post('/', (req, res) => {
//   const newmUser = {
//     username: req.body.username,
//     password: req.body.password,
//     isadmin: false
//   };
//   console.log(newmUser)
//   mdb.addNewUser(newmUser, (err, data) => {
    // const token = createToken({data: data});

    //         res.cookie('token', token, {
    //             httpOnly: true
    //         });
//     console.log(data)
//     res.json(data)
//   })
// });
// router.delete('/', (req, res) => {
//   // console.log(req.params.ISBN)
//   // var booksISBN = req.params.ISBN;
//   mdb.deleteUserById(id, (err, data) => {
//     res.json(data);
//   });
// });
// module.exports = router;