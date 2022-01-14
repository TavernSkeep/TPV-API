var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var expressr = require('express');

function findUser(codigo) {
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db('TavernSkeep');
        
        // --- BUSCAR ---

        var nombre = "";
        
        const result = await dbo.collection('empleado').findOne({codigo:codigo}) /* , function(err, result) {
            if (err) throw err;
            nombre = result.nombre;
            console.log(nombre + " interior")
            //return result.nombre;
        }); */
        console.log(result);
        //return result;
    });
}

exports.finduser = findUser;