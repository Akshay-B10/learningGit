const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

exports.mongoConnect = (callback) => {
  MongoClient
    .connect(process.env.DB_URL)
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      throw (err);
    });
};

exports.getDb = () => {
  if (_db) {
    return _db;
  }
  throw ("No database found");
};
