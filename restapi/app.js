const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    next();
})

require('./routesLoder')(app);

require('dotenv/config');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/posts_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
//console.log("db: ", db);

//connect to db
// mongoose.connect(

//     process.env.DB_CONNECTION, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, () => {
//         console.log("conected to data bases");
//     });
app.listen('3000', () => {
    console.log("server is running at port no 3000");

})