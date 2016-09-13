var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var db = require('./controllers/categoria');

mongoose.connect('mongodb://chrys:123456@ds029486.mlab.com:29486/test_mongonode');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/').get((req,res) => {
  res.end('Welcome to the coolest api');
});

router.route('/categorias')
  .get((req,res) => {
      db.GetAllCategorias((err, categorias) => {
          if(err)
              res.json({error : err});

          res.json(categorias);
      });
  })
  .post((req,res) => {

      db.CreateNote(req, (err) => {
          if(err)
              res.json({error : err});

          res.json({ message : 'Note created successfully' });
      })
  });

app.use('/api', router);

app.listen(port, () => console.log('Server running on port %s', port));