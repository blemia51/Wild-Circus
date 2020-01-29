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
const verifyToken = require('./verifyToken');
const key = require('./key');
const bcrypt = require('bcrypt'); // npm install bcrypt
const port = 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


// TEST
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
