

require('dotenv').config()

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const PORT =  process.env.PORT || 3000;
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

const committeesRouter = require('./server/routes/committees')
app.use('/committees', committeesRouter)

const developersRouter = require('./server/routes/developers')
app.use('/developers', developersRouter)

const commentsRouter = require('./server/routes/comments')
app.use('/comments', commentsRouter)

const contactRouter = require('./server/routes/contact')
app.use('/contact', contactRouter)


const adminRouter = require('./server/routes/admin')
app.use('/admin', adminRouter)

app.use(express.static(__dirname + '/dist/client'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/client/index.html'
    ));
});

app.listen(PORT , () => {
    console.log(`Server is running on port: ${PORT}`);
});

