const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/angular-deploy'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log('Maintainance app listening on port 3000!'));