const { getBalance } = require("../utils");

function index(req, res) {
    const { customer } = req;
    return res.json(customer.statement);
}

function findByDate(req, res) {
    const { customer } = req;
    const { date } = req.query;

    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter(
        (statement) =>
            statement.created_at.toDateString() ===
            new Date(dateFormat).toDateString()
    );

    return res.json(statement);
}

function create(req, res) {
    const { description, amount } = req.body;
    const { type } = req.params;
    const { customer } = req;

    if (type === "withdraw") {
        const balance = getBalance(customer.statement);

        if (balance < amount) {
            return res.status(400).json({ error: "Insufficient funds!" });
        }
    }

    const statementOperation = {
        description: !(type === "withdraw") && description,
        amount,
        created_at: new Date(),
        type: (type === "deposit" && "credit") || (type === "withdraw" && "debit")
    }

    customer.statement.push(statementOperation);

    return res.status(201).send();
}

module.exports = {
    index,
    findByDate,
    create
}
