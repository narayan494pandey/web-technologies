var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url, function (err, db) {
    if (!err) {
        var dbo = db.db("shoppingdb");
        dbo.collection("tblproducts").find({}).
            toArray(function (err, docs, fields) {
                if (!err) {
                    console.log(docs);

                } else {
                    console.log(err);
                }

            })
    } else {
        console.log(err);
    }
});