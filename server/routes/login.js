const express = require('express');
const router = express.Router();
const passport = require('passport');
const mdb = require('../model/users.js');
// const jwt = require('jsonwebtoken');
// const _ = require('lodash');
// var isValidPassword = function (user, password) {
//     return bCrypt.compareSync(password, user.password);
// }
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

router.post("/", (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(user.username)
    mdb.getUserByName(user, (err, data) => {
        console.log(data)
         res.json(data)
    })
    // .select('password') 
    //     .exec(function(err, user){
    //         if (err) {
    //             return res.sendStatus(500)
    //         } 
    //         if (!user) {return res.sendStatus(401)}
    //         bcrypt.compare(password, user.password, function(err, valid){
    //             if (err) {
    //                 return res.sendStatus(500)
    //             }
    //             if (!valid){ return res.sendStatus(401)}
    //             var token = jwt.encode({username: username}, config.secretkey)
    //             res.send(token)
    //         })
    //     })

    // req.session.userId = user.id;
    // res.render("user/login", { title: "Login" });


});
module.exports = router;