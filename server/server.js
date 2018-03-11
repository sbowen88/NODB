
const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors');

const app = express();


app.use( bodyParser.json() );
app.use( cors() );

app.get('/',(req, res) => res.send(res))
app.use( bodyParser.json() );
app.use( express.static( __dirname + "/../public/build") );

// const baseURL = "/api/books";
// app.post(baseURL, bc.create);
// app.get(baseURL, bc.read);
// app.put(`${baseURL}/:id`, bc.update);
// app.delete(`${baseURL}/:id`, bc.delete);

//read:get, create:post, update:put, delete:delete




const port = 3005;
app.listen( port, () => {
console.log( `Eavesdropping on port ${port}` )
})