var router = require('express').Router();

console.log('yo');

router.get('/', function(req, res){
  res.send('hello from days (of our lives)');
})

router.get('/:id/restaurants', function(req, res){
  res.send("hello from days.js");
});

module.exports = router;