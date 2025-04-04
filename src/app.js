const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const logRoutes = require('./routes/logRoutes');
app.use('/api/logs', logRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Verda API is running' });
});


module.exports = app;
