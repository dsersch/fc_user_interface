const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT

// Initialize App
const app = express();

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Start Server
app.listen(PORT, (err) => {
    err || console.log(`Server running on port ${PORT}...`)
})