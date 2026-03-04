const express = require('express');
const app = express();
app.use(express.json());

let items = ["Book", "Laptop", "Phone"];

// GET all items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST new item
app.post('/items', (req, res) => {
    const { name } = req.body;
    items.push(name);
    res.status(201).json({ message: "Item added", name });
});

// GET item by ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < items.length) {
        res.json(items[id]);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.listen(8081, () => console.log("Item Service running on 8081"));