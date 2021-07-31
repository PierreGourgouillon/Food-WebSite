const express =  require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const authentificationRoutes = require("./routes/authentificationUser")
const foodRoutes = require("./routes/food")
const path = require('path');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://Admin:GN6whb3ocXlzjeHg@cluster0.9x5zu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json())

app.use("/api/authentification", authentificationRoutes)
app.use("/api/foods", foodRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app