var router = require('express').Router();
var Day = require('../../models').Day;


router.get('/', function(req, res, next){
  Day.find({}).exec()
    .then(function (days) {
      res.send(days);
    })
    .then(null, next);
});


router.get('/:id/restaurants', function(req, res){
  res.send("hello from days.js");
});

router.post('/', function (req, res, next) {
  console.log("TOP")
  Day.create({
    number: +req.body.number + 1,
    hotel: null,
    restaurants: null,
    activities: null
  })
  .then(function (newDay) {
    res.send(newDay);
  })
  .then(null, next);
});

module.exports = router;