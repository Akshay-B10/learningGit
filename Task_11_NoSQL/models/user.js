const { ObjectId } = require("mongodb");

const getDb = require("../util/database").getDb;

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then(user => {
        return user;
      })
      .catch(err => {
        throw (err);
      })
  }

  static findById(id) {
    const db = getDb();
    return db
      .collection("users").find({
        _id: new ObjectId(id)
      })
      .next()
      .then(user => {
        return user
      })
      .catch((err) => {
        throw (err);
      })
  }
}

module.exports = User;
