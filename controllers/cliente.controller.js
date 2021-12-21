const model = require('../models/cliente.model');

class ClienteController
{
    getCedulaCliente = async(req, res) =>
    {
        const db_res = await model.GetCedulaCliente();
        res.json(db_res.rows);
    }

    getNombreCliente = async(req, res) =>
    {
        const db_res = await model.GetNombreCliente();
    }
}

const controller = new ClienteController();
module.exports = controller;