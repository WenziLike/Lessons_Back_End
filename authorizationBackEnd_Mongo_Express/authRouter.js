const Router = require('express')
const controller = require('./authController')
const router = new Router()
const {check} = require('express-validator')
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', 'Password must be more than 6 characters').isLength({min: 6, max: 12})
], controller.registration)
router.post('/login', controller.login)
// ['ADMIN', 'USER'] убрать USER/ ADMIN тогда юзер не будет иметь прав для входа  и т.д
router.get('/users', roleMiddleware(['ADMIN','USER']), controller.getUsers)

module.exports = router