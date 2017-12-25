var express = require('express');
var router = express.Router();

function IndexView(req, res) {

  var context = {
    title: 'Superfeel | Official Website of Superfeel',
    description: 'Superfeel is an emerging Brooklyn duo comprised of Jordan Bradley and Androu Boudreau. They’ve been named one of Milk Studio’s 2018 artists to watch',
    image: 'http://www.isuperfeelyou.com/images/site_image.jpg'
  };

  res.render('index', context);

}

router.get('/', IndexView);
module.exports = router;
