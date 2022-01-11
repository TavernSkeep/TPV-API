const {application} = require('express');
const express = require('express');
const router = express.Router();

//Data from hypothetical database
const users = require("../sample.json")

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(require('./routes/index'));
server.use("/api/users", require('./routes/users'));

router.put('/:id', (peticion, respuesta) =>{
    const {usurname, lastname} = peticion.body;
    if(usurname && lastname){
        const filtered = users.filter(function(element){
            if(element.id == peticion.params['id']){
                element.usurname = usurname;
                element.lastname = lastname;
            }
        })
        respuesta.json(users)
    }else{
        respuesta.json("Error al introducir los datos.");
    }
})

router.delete('/:id', (peticion, respuesta) =>{
    const filtered = users.filter(function(element){
        if(element.id == peticion.params['id'])
            users.splice(element, 1)
    })
    respuesta.send(users)
})


server.listen(8080, () => {
    console.log('Server on port 8080');
});