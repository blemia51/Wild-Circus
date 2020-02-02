const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // npm i morgan
const app = express();
const cors = require('cors'); // npm install cors
const passport = require('passport'); // npm install passport
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken
const JwtStrategy = require('passport-jwt').Strategy; // npm install passport-jwt
const ExtractJwt = require('passport-jwt').ExtractJwt; // npm install passport-local
const key = require('./key');
const bcrypt = require('bcrypt'); // npm install bcrypt
const port = 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// PASSEPORT CONFIG STRATEGY
passport.use(new LocalStrategy(
  {
      usernameField: 'email',
      passwordField: 'password',
      session: false
  },
  function (email, password, cb) {
    console.log('hello toto')
    connection.query('SELECT iduser, email, password FROM users WHERE email = ?', email , function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (bcrypt.compareSync(password, user[0].password)!=true) { return cb(null, false); }
      return cb(null, user);
  })
})
)

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key
},
function (jwtPayload, cb) {
  console.log(jwtPayload)
  return cb(null, jwtPayload);
}
));

// LOGIN & TOKEN

app.post('/api/login', function(req, res)  {
  passport.authenticate('local',(err, users, info) => {
    if(err)
      return res.status(500).send(err)
    if (!users)
      return res.status(400).json({flash: 'erreur de login'});

    const {iduser} = users[0];
    const token = jwt.sign({iduser}, key, {expiresIn: 60*60});
    console.log(token)
    return res.json({
      user: {iduser},
      token
    })
 })(req, res)
})

//POST USERS
app.post('/api/users', (req, res) => {
  const {nickname, email, password}  = req.body
  const hash = bcrypt.hashSync(password, 10, (err, hash) => {
    return hash
  });
  formData = {nickname, email, password: hash};
  console.log(formData)
    connection.query('INSERT INTO users (nickname, email, password) VALUES (?,?,?)', [formData.nickname, formData.email, formData.password], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

// GET ONE USER

app.get('/api/users/:iduser', passport.authenticate('jwt', { session:  false }), (req, res) => {
  const iduser = req.params.iduser
  console.log(iduser)
  connection.query('SELECT nickname from users WHERE iduser = ?',[iduser], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    } else {
      res.json(results);
    }
  });
});

// GET TOURS
app.get('/api/tours', passport.authenticate('jwt', { session:  false }), (req, res) => {
  connection.query('SELECT * from tours', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des spectacles');
    } else {
      res.json(results);
    }
  });
});

// POST TOUR RESERVATION
app.post('/api/tour_user', (req, res) => {
  const formData = req.body
  console.log(formData)
  connection.query('INSERT INTO tour_user SET ?', [formData], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la reservation d'un spectacle");
    } else {
      res.sendStatus(200);
    }
  });
});


// GET TOUR RESERVATION
app.get('/api/tour_user/:iduser', (req,res) => {
  const iduser = req.params.iduser
  console.log(iduser)
  connection.query('SELECT * FROM tours AS t INNER JOIN tour_user AS tu ON t.idtour = tu.tourid WHERE tu.userid = ?', [iduser], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des voyages');
    } else {
      res.json(results);
    }
  })
})



// TEST
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
}); 