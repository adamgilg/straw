var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


// Connection URL

// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   insertDocuments(db, function() {
//   });
//   findDocuments(db, function() {
//     db.close();
//   });
// });

var MongoWrapper = function() {
  this.url = 'mongodb://localhost:27017/straw';
};

MongoWrapper.prototype.insert = function(collection, data) {
  MongoClient.connect(this.url, function(err, db) {
    var currentCollection = db.collection(collection);

    collection.insert(data, function() {
      console.log('inserted ', data, 'into the ', collection, 'collection');
      db.close();
    });
  })
};

MongoWrapper.prototype.find = function(collection, target) {
  MongoClient.connect(this.url, function(err, db) {
    var currentCollection = db.collection(collection);

    return currentCollection.find({ title: target })
  })
}

// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// }

// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     // assert.equal(err, null);
//     // assert.equal(3, docs.length);
//     console.log("Found the following records");
//     console.dir(docs);
//     callback(docs);
//   });
// }

module.exports = MongoWrapper;
