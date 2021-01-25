require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


async function start() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(3000, () => console.log('The server has been started on PORT 3000'))
    } catch (e) {
        console.error(e)
    }
}


app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

start()