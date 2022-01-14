var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var expressr = require('express');

function findUser(req, res) {
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db('TavernSkeep');
        
        // --- BUSCAR ---
        
        const result = await dbo.collection('empleado').findOne({codigo:req.params.id}) /* , function(err, result) {
            if (err) throw err;
            nombre = result.nombre;
            console.log(nombre + " interior")
            //return result.nombre;
        }); */
        //console.log(result);
        return res.json(result);
    });
}

exports.finduser = findUser;