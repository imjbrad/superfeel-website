var express = require('express');
var router = express.Router();

function IndexView(req, res) {

  var context = {
    title: 'Superfeel | Official Website of Superfeel'
  };

  res.render('index', context);

}

router.get('/', IndexView);
module.exports = router;
