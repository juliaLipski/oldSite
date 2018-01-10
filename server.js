const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const logger = require('morgan');
const path = require('path');
const http = require('http');
const app = express();
const knowledge = require('./server/routes/knowledge');
const myContacts = require('./server/routes/myContacts');
const myProjects = require('./server/routes/myProjects');
// const users = require('./server/routes/users');
// const login = require('./server/routes/login');
// const passport = require('passport');
// const { Strategy } = require('passport-jwt');
// const { jwt } = require('./server/config/config.js');
// const _ = require('lodash');
// passport.use(new Strategy(jwt, function(jwt_payload, done) {
//     if(jwt_payload != void(0)) return done(false, jwt_payload);
//     done();
// }))

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use(express.session({ secret: 'derpy' }));

// app.use(passport.initialize());
// app.use(passport.session());    // Required for persistent login sessions (optional, but recommended)
// app.use(cookieParser());
// app.use(session({ resave: true, saveUninitialized: true, secret: 'SOMERANDOMSECRETHERE', cookie: { maxAge: 60000 } }));
// app.use(passport.initialize());
// app.use(passport.session());
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/myProjects', myProjects);
app.use('/api/myContacts', myContacts);
// app.use('/api/users', users);
app.use('/api/knowledge',knowledge);
// app.use('/api/login', login);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3100';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));