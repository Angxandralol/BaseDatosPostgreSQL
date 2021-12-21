const db = require('../database/db_config');

class ClienteModel
{
    async GetCedulaCliente()
    {
        let query = `SELECT cedula FROM cliente;`
        const res = await db.query(query);
        return res;
    }
    async GetNombreCliente()
    {
        let query = `SELECT nombre FROM cliente;`
        const res = await db.query(query);
        return res;
    }
}

const model = new ClienteModel();
module.exports = model;