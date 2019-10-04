const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Utlizar o framework express
const app = express();

// Conectar com o mongodb
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-evn0g' + 
'.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Interpretar req JSON no body
app.use(express.json());
app.use(routes);

// Ativar o server
app.listen(3333);