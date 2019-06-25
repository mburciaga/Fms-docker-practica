const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const companeros = require('./data.json')

// variable tipo JSON
const config = {
    name: "Dockerized API",
    port: 3000,
    host: '0.0.0.0' // equivalente a poner el localhost
};

const app = express(); // esta linea indica que la aplicacion es una constante de tipo express

app.use(BodyParser.json())
app.use(cors()) // esta app puede recibir trafico de cualquier origen

app.get('/', (req, res) => { // esta funcion es una funcion de flecha
    res.status(200).send("Hola Mundo!")
})

app.get('/companeros', (req, res) => { // esta funcion es una funcion de flecha
    res.status(200).send(companeros)
})

app.post('/companeros', (req, res) => {
    let new_companeros = {
        name: req.body.name,
        position: req.body.position,
        work: req.body.Work
    }
    companeros.push(new_companeros);
    res.status(200).send({
        message: "Registrado con éxito",
        item: new_companeros
    })
})
app.listen(config.port, config.host, () => {
    console.log(`Running on http://${config.host}:${config.port}`)
})

