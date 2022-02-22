var MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://TavernSkeep:ChingChengHanji@cluster0.yp4it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

exports.get = function(req, res) {
    MongoClient.connect(url, function (err, db) {
        var Nombre = req.params.nombre;
        if (err) throw err;
        var dbo = db.db('TavernSkeep');

        dbo.collection('producto').findOne({nombre:Nombre}, function(err, result) {
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

        result = dbo.collection('producto').find({}).toArray(function(err, result) {
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
            nombre: json.nombre,
            especificaciones: json.especificaciones,
            precio: json.precio,
            imagen: json.imagen,
            stock: json.stock,
            tipo_producto: json.tipo_producto,
            es_categoria: json.es_categoria
        }

        dbo.collection("producto").insertOne(nuevosDatos), function(err, result) {
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
    console.log(json);
    var nuevosDatos = {
        nombre: json.nombre,
        precio: json.precio,
        especificaciones: json.especificaciones,
        stock: json.stock
    }
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("producto").updateOne({nombre:json.nombre}, {$set:nuevosDatos}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        res.end();
    });
}

exports.delete = function (req, res) {
    var Nombre = req.params.nombre;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TavernSkeep");
        dbo.collection("producto").deleteOne({nombre:Nombre}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    res.end();
}