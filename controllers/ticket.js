var MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://TavernSkeep:ChingChengHanji@cluster0.yp4it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

exports.get = function(req, res) {
    MongoClient.connect(url, function (err, db) {
        var code = req.params.codigo;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('ticket').findOne({codigo:code}, function(err, result) {
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

        result = dbo.collection('ticket').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json(result);
        }) 
    })
}

exports.add = function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        
        var json = JSON.parse(JSON.stringify(req.body));
        var nuevosDatos = {
            _id: json.id,
            codigo: json.codigo,
            mesa: json.mesa,
            listaproductos: json.listaproductos,
            fecha: json.fecha
        }

        dbo.collection("ticket").insertOne(nuevosDatos), function(err, result) {
            if (err)    console.log(err);
            else{
                console.log(result);
                db.close();
            }
        };
    });
    res.end();
}

exports.update = function (req, res) {
    var json = JSON.parse(JSON.stringify(req.body));
    console.log(json)
    var nuevosDatos = {
        codigo: json.codigo,
        precio_total: json.n_precio_total,
        precio_comercial: json.precio_comercial
    }
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("ticket").updateOne({codigo:json.codigo}, {$set:nuevosDatos}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        res.end();
    });
}

exports.delete = function (req, res) {
    var code = req.params.codigo;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("ticket").deleteOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}