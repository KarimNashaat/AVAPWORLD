const LocalStrategy = require('passport-local')
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const User = require('../models/user.model')
const { jwtSecret } = require('./index')

module.exports = (passport) => {
    // Local strategy for authentication
    passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()))

    // JWT strategy for jwt token
    passport.use(
        new JWTstrategy(
            {
                secretOrKey: jwtSecret,
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken("jwt")
            },
            async (payload, done) => {
                try {
                    const user = await User.findById(payload.id)
                    done(null, user)
                } catch (error) {
                    done(error);
                }
            }
        )
    );
}

