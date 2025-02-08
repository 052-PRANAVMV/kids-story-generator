const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconfig');
const storyRoutes = require('./routes/storyRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/story',storyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`); 
});

