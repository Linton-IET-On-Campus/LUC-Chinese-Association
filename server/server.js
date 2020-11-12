require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000;
var cors = require('cors')

app.use(cors())

mongoose.connect(process.env.MONGODB_URL, 
    { useNewUrlParser: true},
    { useUnifiedTopology: true }
)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const committeesRouter = require('./routes/committees')
app.use('/committees', committeesRouter)

const developersRouter = require('./routes/developers')
app.use('/developers', developersRouter)

app.listen(PORT , () => {
    console.log(`Server is running on port: ${PORT}`);
});