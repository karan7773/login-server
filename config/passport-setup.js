const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const dotenv=require('dotenv')
dotenv.config()

const clientid=process.env.CLIENT_ID;
const clientsecret=process.env.CLIENT_SECRET

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL:'/auth/google/redirect',
        clientID:clientid,
        clientsecret:clientsecret,
    },()=>{
        //passport callback function    
    })
);