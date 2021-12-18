const router = require("express").Router()
const passport = require("passport")

const CLIENT_URL = "http://localhost:3000/"
//if we have success
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,

        })
    }
})

//if we fail
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
})


router.get("/logout", (req, res) => {
    req.logout()
    res.redirect(CLIENT_URL)
})

//we are getting a client request

router.get("/google", passport.authenticate("google", { scope: ["profile"] }))     //our route is google,we visit google,after visiting  we call passport and the authentication method authenticate(). azthentication method is google and we use also our scope object
router.get("/google/callback", passport.authenticate("google", {            //our callback function
    successRedirect: CLIENT_URL,                                       //after successfull redirection we are going to home page
    failureRedirect: "login/failed"                                                 //if it fails  we go to other url
}))

router.get("/github", passport.authenticate("github", { scope: ["profile"] }))     //our route is github,we visit google,after visiting  we call passport and the authentication method authenticate(). azthentication method is github and we use also our scope object
router.get("/github/callback", passport.authenticate("github", {            //our callback function
    successRedirect: CLIENT_URL,                                       //after successfull redirection we are going to home page
    failureRedirect: "login/failed"                                                 //if it fails  we go to other url
}))


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }))     //our route is facebook,we visit facebook,after visiting  we call passport and the authentication method authenticate(). azthentication method is facebook and we use also our scope object
router.get("/facebook/callback", passport.authenticate("facebook", {            //our callback function
    successRedirect: CLIENT_URL,                                       //after successfull redirection we are going to home page
    failureRedirect: "login/failed"                                                 //if it fails  we go to other url
}))






module.exports = router