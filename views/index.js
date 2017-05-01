var express = require('express');
var router = express.Router();

function IndexView(req, res) {

  var context = {
    title: 'Superfeel | Official Website of Brooklyn\'s breakout pop RnB band',
    posts: [
      {
        image: "images/post-images/pop-disco.jpg",
        title: "Superfeel Takes to<br>the Streets",
        type: "News",
        link: "https://youtu.be/ghh3sAuk5ig"
      },
      {
        image: "images/post-images/that-guy.jpg",
        title: "That Guy Premieres<br>on The FADER",
        type: "Sound",
        link: "http://www.thefader.com/2017/03/30/superfeel-that-guy-premiere"
      },
      {
        image: "images/post-images/oath.jpg",
        title: "Oath: a Poetry Performance",
        type: "Sound",
        link: "https://www.instagram.com/p/BPfpByfF7Eg/"
      },
      {
        image: "images/post-images/automatic.jpg",
        title: "Automatic",
        type: "Sound",
        link: "https://open.spotify.com/track/6hQSeh599ce59TGCd8Rn4X"
      },
      {
        image: "images/post-images/need-that.jpg",
        title: "Need That",
        type: "Sound",
        link: "https://open.spotify.com/track/6bPUDk31D6EjMc3CuGxhfy"
      }
    ]
  };

  res.render('index', context);

}

router.get('/', IndexView);
module.exports = router;
