const express = require('express');

const Account = require('./controller/account');
const Statement = require('./controller/statement');

const { checkCPfAlreadyExists, verifyIfExistsAccountCPF } = require('./middlewares/index');

const app = express();

app.use(express.json());

app.get("/accounts", Account.index);
app.get("/account", verifyIfExistsAccountCPF, Account.findOne);
app.post("/account", checkCPfAlreadyExists, Account.create);
app.put("/account", verifyIfExistsAccountCPF, Account.update);

// app.use(verifyIfExistsAccountCPF)
app.get("/statement/", verifyIfExistsAccountCPF, Statement.index);
app.get("/statement/date", verifyIfExistsAccountCPF, Statement.findByDate);
app.post("/statement/:type", verifyIfExistsAccountCPF, Statement.create);

app.listen(3333, () => {
    console.log('Start')
})