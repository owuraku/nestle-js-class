const jwt = require('jsonwebtoken') 


const sexMiddleware = (req,res, next) => {
    const { sex } = req.query;
    if (!sex || sex.toLowerCase() == 'f'){
        return res.status(400).send('Sorry ladies, somethings are for men only');
    }
    next();
};

const ageMiddleware = (req,res, next) => {
    next('route')
};

const authMiddleware = (req, res ,next) => {
    // check if the request has a token
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;

        console.log(req.user);
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: 'User not authenticated'})
    }
        // const {token} = req.headers;
    next()

    // if token exists, verify the token
}


module.exports = { sexMiddleware, ageMiddleware, authMiddleware}