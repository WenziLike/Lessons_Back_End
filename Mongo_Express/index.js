import express from 'express' // импорт библиотеки
import mongoose from 'mongoose'  // импорт для баззы данных
import router from './backEnd/router.js'
import fileUpload from 'express-fileupload'
/* ================================================================= */

const PORT = 9090 // 1 прописал порт сервера
const DB_URL = `mongodb+srv://slavamur:user@cluster0.gtnh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express() // 2 инициализация EXPRESS библиотеки
/* ================================================================= */
app.use(express.json()) // для преоброзования в  JSON формат
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router) // регистрация  роутера
/* ================================================================= */
async function startApp() {
  //
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT)) //3 срабатывает при запуске  сервера
  } catch (e) {
    console.log(e)
  }
}

startApp()