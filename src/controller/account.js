const { customers } = require('../data');
const { v4: uuidv4 } = require("uuid");

function index(req, res) {

    return res.json(customers)
}

function create(req, res) {
    const { cpf, name } = req.body;

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return res.status(201).send();
}

module.exports = {
    index,
    create
}
