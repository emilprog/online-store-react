require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5300
const cors = require('cors') // для отправки запросов с браузера
const fileUpload = require('express-fileupload') // Для работы с файлами
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json()) //для парса json
app.use(express.static(path.resolve(__dirname, 'static'))) //для парса json
app.use(fileUpload({})) //для парса json
app.use('/api', router)

//Обработка ошибок, последний Middleware
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()