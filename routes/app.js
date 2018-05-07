var express = require('express');
var router = express.Router({mergeParams: true});
var fs = require("fs");
var path = require('path');
var Survey = require('../survey');
var async = require('async');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/url', (req, res) => {
  fs.readdir(path.join(__dirname, "./../public/images"), (err, imgPaths) => {
    if (err) {
      return res.status(400).send({err, message: "Something went wrong"});
    }
    res.status(200).send(imgPaths);
  });
});

router.post('/starter', (req, res) => {
  var survey = new Survey({
    gender: true,
    age: 22
  });
  survey.save((err, survey) => {
    if (err) return res.status(400).send({message: "something's wrong"});
    res.status(200).send({message:"new survey created", id: survey._id});
  })
});

router.post('/one/:id', (req, res) => {
  var array = req.body;
  Survey.findById(req.params.id).then((survey) => {
    survey.images = array;
    return survey.save();
  }).then((survey) => {
    res.status(200).send({message:"first part saved", id: survey._id});
  }).catch((err) => {
    console.log(err);
    res.status(400).send({message: "something's wrong"});
  })
});

router.post('/two/:id', (req, res) => {
  var array = req.body;
  Survey.findById(req.params.id).then((survey) => {
    async.forEach(survey.images, (object, cb1) => {
      async.forEach(array, (i, cb2) => {
        if (i.image == object.image) {
          object.value2 = i.value;
        }
        cb2();
      }, (err) => {
        cb1();
      })
    }, (err) => {
      survey.save((err, survey) => {
        if (err) {
          console.log(err);
          return res.status(400).send({message: "something's wrong"});
        }
        res.status(200).send({message:"second part saved", id: survey._id});
      })
    });
  }).catch((err) => {
    console.log(err);
    res.status(400).send({message: "something's wrong"});
  })
});

router.post('/three/:id', (req, res) => {
  var array = req.body;
  Survey.findById(req.params.id).then((survey) => {
    async.forEach(survey.images, (object, cb1) => {
      async.forEach(array, (i, cb2) => {
        if (i.image == object.image) {
          object.value2 = i.value;
        }
        cb2();
      }, (err) => {
        cb1();
      })
    }, (err) => {
      survey.save((err, survey) => {
        if (err) {
          console.log(err);
          return res.status(400).send({message: "something's wrong"});
        }
        res.status(200).send({message:"third part saved", id: survey._id});
      })
    });
  }).catch((err) => {
    console.log(err);
    res.status(400).send({message: "something's wrong"});
  })
});

module.exports = router;
