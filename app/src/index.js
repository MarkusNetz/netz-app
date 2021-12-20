require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./persistence');
const petsRouter = require('./routes/pets');
const vehiclesRouter = require('./routes/vehicles');
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

// view engine setup
app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public' ));

app.use('/pets', petsRouter);
app.use('/vehicles', vehiclesRouter);
app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

app.listen(3000, () => console.log('Listening on port 3000'));

db.init().then(() => {
  console.log('Connected to database.');
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon

module.exports = app;
