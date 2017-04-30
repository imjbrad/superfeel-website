var express = require('express');
var router = express.Router();

function IndexView(req, res) {

  var context = {
    title: 'Superfeel | Office Website',
    posts: [
      {
        image: "images/post-images/oath.jpg",
        title: "Oath: a poetry performance",
        type: "Sound"
      },
      {
        image: "images/post-images/automatic.jpg",
        title: "Automatic",
        type: "Sound"
      },
      {
        image: "images/post-images/need-that.jpg",
        title: "Need That",
        type: "Sound"
      }
    ]
  }

  res.render('index', context);
}

router.get('/', IndexView);
module.exports = router;
