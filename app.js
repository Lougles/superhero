const express = require('express')
const logger = require('morgan')
const cors = require('cors');

const heroRoutes = require('./src/routes/heroRoutes')

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json())

app.use('/hero', heroRoutes);
app.use((req, res) => {
  res.status(404).json({ message: 'Error! Wrong direct' })
});

module.exports = app;