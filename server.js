const express = require('express');
const app = express();
const cors = require('cors');
const {CakeRouter} = require( './server/routes/cakeRouter.js' );

app.use( express.urlencoded({extended:true}) );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use( cors());
require( './server/config/database.js' );

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/',CakeRouter);



app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});