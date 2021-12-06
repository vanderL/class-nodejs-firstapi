const express = require('express');
const Account = require('./controller/account');
const Statement = require('./controller/statement');
const { checkCPfAlreadyExists, verifyIfExistsAccountCPF } = require('./middlewares/index');

const app = express();

app.use(express.json());


app.get("/account", Account.index);
app.post("/account", checkCPfAlreadyExists, Account.create);

// app.use(verifyIfExistsAccountCPF)
app.get("/statement/", verifyIfExistsAccountCPF, Statement.index);
app.post("/statement/:type", verifyIfExistsAccountCPF, Statement.create);

app.listen(3333, () => {
    console.log('Start')
})