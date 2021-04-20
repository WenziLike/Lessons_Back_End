const jwt = require('jsonwebtoken')
const {secret} = require('../config')
module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'User is not logged in !!!'})
        }
        const decodeData = jwt.verify(token, secret) // лежит обьект с ролями и id пользователей
        req.user = decodeData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: 'User is not logged in !!!'})
    }
}