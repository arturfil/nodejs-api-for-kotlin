const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = 'mongodb://localhost/kotlin_db';

// Connection to MongoDB Locally
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//Passport
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/videogames', require('./routes/videogameItems'));
app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));