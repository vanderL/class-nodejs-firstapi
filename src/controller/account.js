const { customers } = require('../data');
const { v4: uuidv4 } = require("uuid");

function index(req, res) {
    return res.json(customers)
}

function findOne(req, res) {
    const { customer } = req;

    return res.json(customer);
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

function update(req, res) {
    const { name } = req.body;
    const { customer } = req;

    customer.name = name;

    return res.json(customer)
}

module.exports = {
    index,
    findOne,
    create,
    update
}
