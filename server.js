const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

const PORT = config.get('port') || 5000;

app.use(cors());
app.use(express.json({ extended: true }));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  
//     if (req.method === 'OPTIONS') {
//       return res.sendStatus(200);
//     }
  
//     next();
//   });

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api', require('./routes/user.routes'));

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