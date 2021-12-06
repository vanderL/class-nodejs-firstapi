const express = require('express');
const { index, create } = require('./controller/index');
const { checkCPf } = require('./middlewares/index');

const app = express();

app.use(express.json());


app.get("/account", index);
app.post("/account", checkCPf, create);

app.listen(3333, () => {
    console.log('Start')
})