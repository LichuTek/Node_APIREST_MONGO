const express = require('express')
const {config} = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

config()

const bookRoutes = require('./routes/book.routes')


// Usando express para los middleware
const app = express();
app.use(bodyParser.json()) // Parseador de Bodies

//Conectar la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes)

//
const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})