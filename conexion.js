
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('TavernSkeep');

    // --- BUSCAR ---

    dbo.collection('empleado').findOne({codigo:'123456789ABC'}, function(err, result) {
        if (err) throw err;
        console.log(result.nombre);
        db.close();
    });
});