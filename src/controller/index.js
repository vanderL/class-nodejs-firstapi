const { customers } = require('../data');
const { v4: uuidv4 } = require("uuid");

function index(req, res) {

    return res.json(customers)
}

function create(req, res) {
    const { cpf, name } = req.body;

    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return res.status(201).send();
}

module.exports = {
    index,
    create
}
