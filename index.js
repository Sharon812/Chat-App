const {server} = require('socket.io')
const express = require('express')
const app = express()
app.use(express.static('public'))


const userroute = require('./routes/userroute')

app.use('/',userroute)

app.listen(2000,() => {
    console.log('server started');
    
})
