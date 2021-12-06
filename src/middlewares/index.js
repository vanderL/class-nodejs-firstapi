const { customers } = require('../data');

function checkCPf(req, res, next) {
    const { cpf } = req.body;

    const customerAlreadyExists = customers.some((customer) => customer.cpf);

    if (customerAlreadyExists) {
        return res.json({ message: "Usuario já cadastrado" })
    }

    return next();
}

module.exports = {
    checkCPf
}