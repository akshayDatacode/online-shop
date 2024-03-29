const jwt = require('jsonwebtoken');
const HttpResponse = require('../models/http-response');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            throw new Error('Authentication failed!');
        }
        const decodedToken = jwt.verify(token, 'this is www.datacode.in private key');
        console.log("SDF", decodedToken)
        req.userData = { _id: decodedToken._id, email: decodedToken.email, userType: decodedToken.userType };
        next();
    } catch (err) {
        const error = new HttpResponse('Authentication failed!', 403);
        return res.json({ response: error });
    }
};