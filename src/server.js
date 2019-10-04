const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

// Utlizar o framework express
const app = express();

// Conectar com o mongodb
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-evn0g' + 
'.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Criar uma rota para resgatar arquivos que foram uploadados na aplicação:
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
// Aceitar todas as origens de requisições
app.use(cors({origin: 'http://localhost:3000'}))
// Interpretar req JSON no body
app.use(express.json());
app.use(routes);

// Ativar o server
app.listen(3333);