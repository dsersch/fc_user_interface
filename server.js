const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const express = require('express')
const morgan = require('morgan')
const Airtable = require('airtable')
const PORT = process.env.PORT

// Connect to Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY,
});

// Routers
const membersRouter = require('./Routes/MembersRouter.js')
const dealsRouter = require('./Routes/DealsRouter.js')

// Initialize App
const app = express();

// Middleware
app.use(morgan('dev'))
app.use(express.json())

app.use('/members', membersRouter)
app.use('/deals', dealsRouter)

// Start Server
app.listen(PORT, (err) => {
    err || console.log(`Server running on port ${PORT}...`)
})