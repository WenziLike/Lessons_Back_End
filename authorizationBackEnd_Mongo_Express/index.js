const express = require('express') //  импорт экспресс
const mongoose = require('mongoose') // импорт монгуса
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 6868

const app = express()

app.use(express.json())
app.use("/auth", authRouter)


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://slavamur:slavamur2918@cluster0.fnsyd.mongodb.net/auth_authorization?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`SERVER TO STARTED ON PORT  ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

