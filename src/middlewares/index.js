const { request } = require('express');
const { customers } = require('../data');

function checkCPfAlreadyExists(req, res, next) {
    const { cpf } = req.body;

    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if (customerAlreadyExists) {
        return res.json({ message: "Usuario já cadastrado" })
    }

    return next();
}

function verifyIfExistsAccountCPF(req, res, next) {
    const { cpf } = req.params;

    const customerAlreadyExists = customers.find((customer) => customer.cpf === cpf);

    if (!customerAlreadyExists) {
        return res.status(404).json({ message: "Customer not found" });
    }

    req.customer = customerAlreadyExists;

    return next();
}

module.exports = {
    checkCPfAlreadyExists,
    verifyIfExistsAccountCPF
}