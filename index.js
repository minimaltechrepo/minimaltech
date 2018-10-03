const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

var routerpage = require('./src/routes/routespage');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, './src/views'));


console.log(path.join(__dirname, path.join(__dirname, '../src/reactcomponents')));
app.use('/', routerpage);

server.listen(process.argv[2], function(){
	console.log("Corriendo en el servidor - puerto:" + process.argv[2]);
});