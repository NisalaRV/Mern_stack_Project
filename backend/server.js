const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router  = require('./routes/routes');


const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const host = process.env.HOST;
const dbUrl = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            //useNewUrlParser: true, useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

connectDB();
app.use('/api',router);

app.listen(port, host, () => {
    console.log(`Server is listening on ${host}:${port}`);
});
