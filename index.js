const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

var routerpage = require('./src/routes/routespage');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, 'src/public')));
app.use('/static', express.static(path.join(__dirname, 'src/public')));

app.use('/', routerpage);

server.listen(process.env.PORT, function(){
	console.log("Corriendo en el servidor - puerto:" + process.env.PORT);
});