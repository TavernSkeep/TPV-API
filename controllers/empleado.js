var MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

exports.get = function(req, res) {
    MongoClient.connect(url, function (err, db) {
        var code = req.params.codigo;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('empleado').findOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json(result);
        })    
    })
}

exports.list = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");

        result = dbo.collection('empleado').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json({result: result})
        }) 
    })
}

exports.add = function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");

        dbo.collection("empleado").insertOne(JSON.parse(JSON.stringify(req.body)), function(err, result) {
            if (err)    console.log(err);
            else{
                console.log(result);
                db.close();
            }
        });
    });
    res.end();
}

exports.update = function (req, res) {
    var json = JSON.parse(JSON.stringify(req.body));
    console.log("DOMINGO!")
    console.log(json)
    var nuevosDatos = {
        Id_camarero: json.Id_camarero,
        Nombre: json.Nombre,
        jornada: json.jornada
    }
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("empleado").updateOne({Id_camarero:json.Id_camarero},{$set:nuevosDatos}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        res.end();
    });
}

exports.delete = function (req, res) {
    var code = req.params.code;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("empleado").deleteOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}