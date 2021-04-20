const Router = require('express')
const controller = require('./authController')
const router = new Router()
const {check} = require('express-validator')

router.post('/registration', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', 'Password must be more than 6 characters').isLength({min: 6, max: 12})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router