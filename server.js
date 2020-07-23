const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('config');

const PORT = config.get('port') || 5000;

app.use('/api/auth', require('./routes/auth.routes'));

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}..`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();