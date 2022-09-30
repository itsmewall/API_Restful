const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.example.com.br'
]

// habilita cors
app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        if (!origin) allowed = true //ex. mobile app
        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// habilitar o recebimento de dados json
app.use(express.json())

// rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))