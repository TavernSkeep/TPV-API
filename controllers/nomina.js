const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


exports.get = function(req, res) {
    MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        var code = req.params.codigo;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('nomina').findOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json(result);
        })    
    })
}

exports.list = function (req, res) {
    MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");

        result = dbo.collection('nomina').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json(result);
        }) 
    })
}

exports.add = function (req, res) {
    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");

        dbo.collection("nomina").insertOne(JSON.parse(JSON.stringify(req.body)), function(err, result) {
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
        codigo: json.codigo,
        horas: json.horas,
        euros: json.n_euros
    }
    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("nomina").updateOne({codigo:json.codigo}, {$set:nuevosDatos}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        res.end();
    });
}

exports.delete = function (req, res) {
    var code = req.params.codigo;

    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("nomina").deleteOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}