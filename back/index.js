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
      user: {userID},
      token
    })
 })(req, res)
})


// TEST
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
}); 