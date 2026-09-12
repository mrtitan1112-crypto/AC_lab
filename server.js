const express = require('express');
const path = require('path');
const app = express();

// Render assigns a dynamic port via process.env.PORT
const PORT = process.env.PORT || 3000;

// Serve all static files in the current directory (including your index.html)
app.use(express.static(__dirname));

// Route the main URL to your 3D lab HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`3D Circuit Lab server is running on port ${PORT}`);
});
