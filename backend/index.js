const express = require('express');
const app = express();
require('dotenv').config();
const AppError = require('./utils/errors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const mainRouter = require('./routes');
app.use('/api', mainRouter);


app.get('/', (req, res) => {
    res.send("Hello world!");
});


const errorMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    const error = new AppError('Internal Server Error', 500);
    res.status(error.statusCode).json({ error: error.message });
  }
};

module.exports = errorMiddleware;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});