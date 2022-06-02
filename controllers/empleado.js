const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

exports.get = function(req, res) {
    MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        var code = req.params.dni;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('empleado').findOne({dni:code}, function(err, result) {
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

        result = dbo.collection('empleado').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            return res.json(result)
        }) 
    })
}

exports.add = function (req, res) {
    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");

        var json = JSON.parse(JSON.stringify(req.body));
        var nuevosDatos = {
            _id: json.id,
            dni: json.dni,
            contraseña: json.contraseña,
            nombre: json.nombre,
            apellidos: json.apellidos,
            puesto: json.puesto,
            email: json.email,
            telefono: json.telefono
        }

        dbo.collection("empleado").insertOne(nuevosDatos), function(err, result) {
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
        dni: json.dni,
        contraseña: json.contraseña,
        puesto: json.puesto,
        telefono: json.telefono,
        email: json.email
    }
    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("empleado").updateOne({dni:json.dni}, {$set:nuevosDatos}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        res.end();
    });
}

exports.delete = function (req, res) {
    var code = req.params.dni;

    MongoClient.connect(process.env.MONGO_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("empleado").deleteOne({dni:code}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}