require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./src/routes/dataRoutes');
const { seedData } = require('./src/utils/seeder');
const cors = require('cors');


const app = express();
const url = process.env.MONGO_URI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    seedData()
    console.log('db connected')})
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));


app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Route to handle the GET request for data
app.use('/api/v1/data', dataRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});