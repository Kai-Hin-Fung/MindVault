const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Link = require('./models/link');

const app = express();
const port = process.env.PORT || 5000;

// Use your MongoDB Atlas connection string here
const dbURI = 'mongodb+srv://professionalhustler84:51rluT2yApGCGb0G@cluster1.dwbssp5.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.log(err));

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Parse JSON request bodies

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.post('/api/submit', async (req, res) => {
    try {
        const newLink = new Link({
            url: req.body.url
        });
        await newLink.save();
        res.status(200).json({ message: 'Link saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
