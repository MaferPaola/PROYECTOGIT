var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

var usuarios = [
  {id: 1,
    nombre: "Juan",   
  },
  {id: 2,
    nombre: "Omar",  
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usuarios);
});

router.get('/.id', function(req, res, next) {
  res.send("El id del usuario es"+req.params.id);
});

router.post('/', function(req, res, next) {
  usuarios.push(req.body);
  res.send(usuarios);
});


module.exports = router;
