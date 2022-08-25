import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.js'
import mongoose from 'mongoose'
import 'dotenv/config'

const app =  express()

const PORT = 5000

app.use(bodyParser.json())

app.use('/api', userRouter)

//connect to database
const CONNECTION_URL = process.env.DB_CONNECTION
mongoose.connect(CONNECTION_URL, () => console.log('connected to db'))

app.listen(PORT, function() {
    console.log(`Hey, the server is running on ${PORT}`)
})

