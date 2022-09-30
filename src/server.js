const express = require('express')
// const path = require('path')

// const db = require('./database')
const routes = require('./routes/routes')

const app = express()

// db.connect()

// server post
app.use(express.urlencoded({ extended: true }))

// rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))