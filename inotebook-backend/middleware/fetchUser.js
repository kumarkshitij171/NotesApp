let jwt = require('jsonwebtoken');
// have to use same token as per used in the auth login / register 
require('dotenv').config();
const JWT_Token = process.env.JWT_KEY
// creating a middle ware
const fetchUser = (req, res, next) => {
    // get the user from jwt token and append the id to the req object
    const token = req.header('auth-token')
    if (!token) {
        // not able to authenticate the user using that token 
        res.status(401).send({ error: "Please authenticate using valid token" })
    }
    try {
        // if we get the token then we have to verify that token is authenticated or not 
        const data = jwt.verify(token, JWT_Token)

        req.user = data.user

        next();

    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Please authenticate using valid token" })
    }
    /*
    ! next will call the next one means that "router.get('/dashboard',fetchUser,isAdmin, async (req,res)" we have some thing like this
    * next will call firstly the fetch user then after check for the isAdmin access and so on if any more thing to do there then after it will send req/res  
    */
}

module.exports = fetchUser;