const {Schema, model} = require('mongoose') // импортируем монгус  и достаем схему и модель


// в схеме  описываем поля как пользователь будет храниться в  базе  данных

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User)