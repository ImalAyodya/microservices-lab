const express = require('express');
const app = express();
app.use(express.json());

let orders = [];
let idCounter = 1;

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const order = {
        id: idCounter++,
        ...req.body,
        status: "PENDING"
    };
    orders.push(order);
    res.status(201).json(order);
});

app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id == req.params.id);
    if (order) res.json(order);
    else res.status(404).json({ message: "Not found" });
});

app.listen(8082, () => console.log("Order Service running on 8082"));