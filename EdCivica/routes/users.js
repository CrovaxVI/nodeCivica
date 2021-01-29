var express = require('express');
var router = express.Router();


router.get('/1', function (req, res, next) {
    const uri = TUA_STRINGA_DI_CONNESSIONE
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("tubercolosi"); 
     
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else console.log(result);
            client.close(); 
        }); 

    });
    res.send('respond with a resource');
});
router.get('/2', function (req, res, next) {
    const uri = TUA_STRINGA_DI_CONNESSIONE
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("uhc"); 
   
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else console.log(result);
            client.close(); 
        }); 

    });
    res.send('respond with a resource');
});
router.get('/3', function (req, res, next) {
    const uri = TUA_STRINGA_DI_CONNESSIONE
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("dati").collection("vaccini");
     
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else console.log(result);
            client.close(); 
        }); 

    });
    res.send('respond with a resource');
});

module.exports = router;
