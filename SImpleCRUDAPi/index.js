import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.js'
const app =  express()

const PORT = 5000

app.use(bodyParser.json())

app.use('/api', userRouter)

app.listen(PORT, function() {
    console.log(`Hey, the server is running on ${PORT}`)
})