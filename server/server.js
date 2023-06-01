const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// put it before all route definitions
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
