const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Save user in session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// LinkedIn strategy
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('LinkedIn Profile:', profile);
      return done(null, profile);
    }
  )
);
