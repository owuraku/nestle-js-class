
const sexMiddleware = (req,res, next) => {
    const { sex } = req.query;
    if (!sex || sex.toLowerCase() == 'f'){
        return res.status(400).send('Sorry ladies, somethings are for men only');
    }
    next();
};

const ageMiddleware = (req,res, next) => {

};


module.exports = { sexMiddleware, ageMiddleware}