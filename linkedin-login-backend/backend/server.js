const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./linkedinAuth'); // custom auth logic

const app = express();
const PORT = 5000;

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Route: Home
app.get('/', (req, res) => {
  res.send('<h2>Welcome</h2><a href="/auth/linkedin">Login with LinkedIn</a>');
});

// Route: LinkedIn Auth
app.get('/auth/linkedin', passport.authenticate('linkedin'));

// Route: LinkedIn Callback
app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/',
  })
);

// Route: Profile
app.get('/profile', (req, res) => {
  res.send(`<h2>Hello, ${req.user.displayName}</h2>`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
