import express from 'express'
import bodyParser from 'body-parser'

const app =  express()

const PORT = 5000

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('hi')
})

app.listen(PORT, function() {
    console.log(`Hey, the server is running on ${PORT}`)
})