var express = require('express');
var router = express.Router();
var mdb = require('../model/knowledge.js');

router.get("/", (req, res) => {
  mdb.getAll(function (err, data) {
     console.log(data)
    res.json(data)
  });
});

router.post('/', (req, res) => {
  const newmyknowledge = {
        title: req.body.title,
        content1: req.body.content,
        content2: req.body.content,
        frontend: req.body.frontend,
        backendAndDb: req.body.backendAndDb,
        anotherSkills: req.body.anotherSkills
  };
// console.log('newmyknowledge')
  mdb.addNewknowledge(newmyknowledge, (err, data) => {
    // console.log(data)
    res.json(data)
  })
});
router.delete('/', (req, res) => {
  // console.log(req.params.ISBN)
  // var booksISBN = req.params.ISBN;
  mdb.deleteknowlageByTitle(booksISBN, (err, data) => {
    res.json(data);
  });
});
module.exports = router;