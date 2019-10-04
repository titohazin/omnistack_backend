const express = require('express');
const multer = require('multer')
const upload_options = require('./util/upload')

const routes = express.Router();
const upload = multer(upload_options);

const SessionController = require('./controllers/SessionController')
routes.post('/sessions', SessionController.store);

const DashboardController = require('./controllers/DashboardController')
routes.get('/dashboard', DashboardController.show);

const SpotController = require('./controllers/SpotController')
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

const BookingController = require('./controllers/BookingController')
routes.post('/spots/:spot_id/bookings', BookingController.store);

// Exemplo de req GET com querys
routes.get('/demo', (req, res) => {
    return res.json({ id: req.query.message });
});
// Exemplo de req POST com body
routes.post('/demo', (req, res) => {
    return res.json(req.body);
});
// Exemplo de req PUT com route params
routes.put('/demo/:id', (req, res) => {
    return res.json({ id: req.params.id });
});
// Exemplo de req DELETE com route params
routes.delete('/demo/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

module.exports = routes;