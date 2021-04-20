const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('/config')


const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class AuthController {

    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Registration error', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username}) // ищем пользователя
            if (candidate) { // если есть пользователь с таким именем возвращаем ошибку
                return res.status(400).json({message: 'A user with the same name already exists'})
            }
            // хешируем пароль
            const hashPassword = bcrypt.hashSync(password, 10)
            // нашли роль
            const userRole = await Role.findOne({value: 'USER'})
            // создали пользователя
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            // сохраняем в  базу данных
            await user.save()
            // вернули ответ на клиент
            return res.json({message: 'User registered successfully'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `user with this ${username} was not found`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Incorrect password entered!!!'})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            res.json("server at work!!!")
        } catch (e) {
        }
    }
}

module.exports = new AuthController()