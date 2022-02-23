var MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://TavernSkeep:ChingChengHanji@cluster0.yp4it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

exports.get = function(req, res) {
    MongoClient.connect(url, function (err, db) {
        var code = req.params.codigo;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('mesa').findOne({codigo:code}, function(err, result) {
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

        result = dbo.collection('mesa').find({}).toArray(function(err, result) {
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
            zona: json.zona,
            n_sillas: json.n_sillas,
            ticket_actual: json.ticket_actual,
            codigo: json.codigo,
            n_mesa: json.n_mesa
        }

        dbo.collection("mesa").insertOne(nuevosDatos), function(err, result) {
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
        //_id: json._id,
        codigo: json.codigo,
        zona: json.zona,
        n_sillas: json.n_sillas,
        is_reservada: json.is_reservada,
        ticket_actual: json.ticket_actual
    }
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("mesa").updateOne({codigo:json.codigo}, {$set:nuevosDatos}, function(err, result) {
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
        dbo.collection("mesa").deleteOne({codigo:code}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}