const express = require('express');
const bodyParser = require('body-parser');   // in this place we can use app.use(express.json())
const cors = require('cors');
const jwtConfig = require('./config/jwt.config')
    //create express app
const app = express();

var corsOptions = jwtConfig.corsOptions

app.use(cors(corsOptions));

//parse requests of content-type - application/x-www-for-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//define a root route
app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
});

//Require routes
const routes = require('./src/routes')
    //const routes = require('./src/routes1')
    //using as middleware
app.use('/api', routes);

// set port, listen for requests
const port = process.env.PORT || 5000;
console.log("Port--> " + port, process.env.PORT);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})