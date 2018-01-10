var express = require('express');
var router = express.Router();
var mdb = require('../model/myContacts.js');


router.get("/", (req, res) => {
  mdb.getMyContacts(function (err, data) {
     console.log(data)
    res.json(data)
  });
});

router.post('/', (req, res) => {
  const newmyContacts = {
    city: req.body.city,
    lat: req.body.lat,
    long: req.body.long,
    email: req.body.email,
    phone: req.body.phone
  };
console.log(req.body)
  mdb.addmyContacts(newmyContacts, (err, data) => {
    // console.log(data)
    res.json(data)
  })
});
router.delete('/', (req, res) => {
  mdb.deleteMyContactsByTitle(title, (err, data) => {
    res.json(data);
  });
});
module.exports = router;