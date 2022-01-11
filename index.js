const {application} = require('express');
const express = require('express');

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(require('./routes/index'));
server.use('/api/users/', require('./routes/usuarios'));

server.listen(8080, () => {
    console.log('Server on port 8080');
});