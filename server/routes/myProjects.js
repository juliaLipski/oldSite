var express = require('express');
var router = express.Router();
var mdb = require('../model/myProjects.js');


router.get("/", (req, res) => {
  mdb.getAllmyProjects(function (err, data) {
     console.log(data)
    res.json(data)
  });
});

router.post('/', (req, res) => {
  const newmyProjects = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content
  };
console.log(newmyProjects)
  mdb.addNewmyProjects(newmyProjects, (err, data) => {
    // console.log(data)
    res.json(data)
  })
});
router.delete('/', (req, res) => {
  // console.log(req.params.ISBN)
  // var booksISBN = req.params.ISBN;
  mdb.deletemyProjectByTitle(booksISBN, (err, data) => {
    res.json(data);
  });
});
module.exports = router;