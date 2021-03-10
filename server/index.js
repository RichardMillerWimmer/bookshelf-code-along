const express = require('express');
const bc = require('./controllers/books_controller.js')

const app = express();
const port = 4000;

app.use(express.json());


app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)









app.listen(port, () => console.log(`Server is running on ${port}`))
