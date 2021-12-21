const express = require('Express');
const router = express.Router();

//Controller
const cliente_controller = require('../controllers/cliente.controller');

//routes
router.get('/cedula', cliente_controller.getCedulaCliente);
router.get('/nombre', cliente_controller.getNombreCliente);

module.exports = router;