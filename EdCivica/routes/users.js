var express = require('express');
var router = express.Router();
var { MongoClient } = require("mongodb");


router.get('/1', function (req, res, next) {
    const uri = 'mongodb+srv://biraghi:Biraghi@edcivica.0zxgl.mongodb.net/EdCivica?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("tubercolosi"); 
     
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });
});
router.get('/2', function (req, res, next) {
    const uri = 'mongodb+srv://biraghi:Biraghi@edcivica.0zxgl.mongodb.net/EdCivica?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("uhc"); 
   
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });
});
router.get('/3', function (req, res, next) {
    const uri = 'mongodb+srv://biraghi:Biraghi@edcivica.0zxgl.mongodb.net/EdCivica?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("vaccini");
     
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });
});

module.exports = router;
