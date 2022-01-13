var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var expressr = require('express');

function findUser(codigo) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db('TavernSkeep');
    
        // --- BUSCAR ---
    
        dbo.collection('empleado').findOne({codigo:codigo}, function(err, result) {
            if (err) throw err;
            db.close();
            console.log(result.nombre);
            return result.nombre;
        });
    });
}

exports.finduser = findUser;