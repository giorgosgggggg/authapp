const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;



const GOOGLE_CLIENT_ID = "12245076014-q3c6j6ksf8atm71i81cd0vt8q35ivv92.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "f49e137f5b6ce6896c5c"
const GITHUB_CLIENT_SECRET = "bf963343d3126aa21675e6b160bb5feec52dcc93"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})