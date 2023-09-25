const express = require("express")
var bcrypt = require('bcryptjs');
require('dotenv').config(); 
var jwt = require('jsonwebtoken');
const router = express.Router()
const User = require("../models/User")
// validation
const { body, validationResult } = require('express-validator');
const fetchUser = require("../middleware/fetchUser");

// giving a Jwt token to user so that user doesnot have to login repeated number of times
const JWT_Token =  process.env.JWT_KEY

//! Route 1: Create an user using: POST "/api/auth/createuser" doesnot require auth (No Login require)
router.post('/createuser', [
    //* while Register check for the correct name email and password if it not then why to use a db call so sending error msg at that time and not storing the data into the db
    body('name', 'Enter a valid name').notEmpty().isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a Strong password').notEmpty().isLength({ min: 7 })
], async (req, res) => {

    //? there is no any such validation so we have to make one or npm i a pakagae also we can entry the duplicate data i.e not good
    //? so we use express validator
    // console.log(req.body);
    // const user = User(req.body)
    // user.save()

    try {
        //! if there is user already exists return bad request
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ result: result.array() });
        }
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ "error": "user already exists with this email" });
        }
        // creating a salt to add a protection layer in my db 
        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: securePass,
            email: req.body.email,
        })
        // res.json(user)
        // instead of sending whole user data we are just sending the jwt token from that token we can verify the user 
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Token)
        // sending auth token with the token as id attached to it
        res.json({ authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})

//------------------------------------------------------------------//

//! Route 2: Login: POST "/api/auth/login" doesnot require auth (No Login require)
router.post('/login', [
    //* while login check for the correct email and password if it not then why to use a db call so sending error msg at that time
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
    }

    // destructuring username or email and password from the result
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ "error": "Invalid Credentials" });
        }

        const passCompare = await bcrypt.compare(password, user.password)
        if (!passCompare) {
            return res.status(400).json({ "error": "Invalid Credentials" });
        }

        // if password is correctly entered then sending the data i.e payload
        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_Token)
        res.json({ authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }


})

//! Route 3: Dashboard after user logged in we sent it to the dashboard: GET "/api/auth/dashboard " Login required!

router.post('/dashboard',fetchUser, async (req,res)=>{
    // here we are adding a middleware because we are sending the token and from using that token we are grabbing all the user details 
    // we can use a middle ware using the npm pakage or we can create our own middleware

    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }

    // res.status(201).send("welcome to dashboard")
})

module.exports = router