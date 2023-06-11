const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Link = require('./models/Link');


// Set up Express
const app = express();
app.use(express.json()); // This allows us to access req.body
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://MindVault2578:<2017DSEstriver>@cluster0.g0scskv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.log(err));

// Set up CORS
app.use(cors({ origin: 'http://localhost:3000' }));


app.post('/api/submit', async (req, res) => {
    try {
      // Create a new instance of the Link model with the URL obtained from the request body
      const newLink = new Link({
        url: req.body.url
      });
  
      // Save the newLink object to the database
      await newLink.save();
  
      // Send a success response with a JSON object indicating that the link was saved successfully
      res.status(200).json({ message: 'Link saved successfully' });
    } catch (error) {
      // If an error occurs during the try block, send an error response with the error message
      res.status(500).json({ error: error.message });
    }
  });
  