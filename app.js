const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
// const Comment = require('./models/comment')
// const Review = require('./models/review')
// const reviews = require('./controllers/reviews')(app);
// const comments = require('./controllers/comments')(app);

const donationsController = require('./controllers/donations');
const charitiesController = require('./controllers/charitys');


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));




// Tell your Express app that your static files will live in the public folder
app.use(express.static('public'));

donationsController(app);
// charitiesController(app);




//review.js
const port = process.env.PORT || 3000;

// Mongoose Connection
const mongoUri =
   process.env.MONGODB_URI || "mongodb://localhost:27017/charity-tracker";
mongoose.connect(
   mongoUri,
   { useNewUrlParser: true }
);




// app.listen(port);


//
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
module.exports = app;
