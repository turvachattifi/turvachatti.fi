// Importing
const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
// Importing end
//
// Database init
const Database = require("@replit/database")
const db = new Database()
// Database init end
//
// Init Express Middleware / Addons
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
// Init Express Middleware / Addons end
//
// Functions

// Functions end
//
// Routes
app.get('/', (req, res) => {
    res.send('soon™')
})
app.get('/api/', (req, res) => {
    res.status(404).send('<h1>nope.</h1>')
})
app.get('/lebronjames/', (req, res) => {
    res.sendFile(path.join(__dirname, '../chattifi', 'lebron_james.html'));
})
// Routes end
//
// Run express
app.listen(port, () => {
    console.log(`random chat app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/api/`)
})
// Run express done