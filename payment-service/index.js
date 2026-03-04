const express = require('express');
const app = express();
app.use(express.json());

let payments = [];
let idCounter = 1;

app.get('/payments', (req, res) => {
    res.json(payments);
});

app.post('/payments/process', (req, res) => {
    const payment = {
        id: idCounter++,
        ...req.body,
        status: "SUCCESS"
    };
    payments.push(payment);
    res.status(201).json(payment);
});

app.get('/payments/:id', (req, res) => {
    const payment = payments.find(p => p.id == req.params.id);
    if (payment) res.json(payment);
    else res.status(404).json({ message: "Not found" });
});

app.listen(8083, () => console.log("Payment Service running on 8083"));