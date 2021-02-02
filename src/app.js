const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


require('dotenv').config();
require('./db/connection'); //invoking db connection

const app = express();
const ideasRouter = require('./routes/ideas_route');
const middlewares = require('./middlewares');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello there");
});

app.use(morgan('tiny'));
app.use(bodyParser.json());

//using idea route handler
app.use('/ideas', ideasRouter);

//using middleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, (req, res) => {
    console.log(`App is running on localhost:${port}`);
})