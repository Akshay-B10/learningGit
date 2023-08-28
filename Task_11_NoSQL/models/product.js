const { ObjectId } = require("mongodb");

const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, imageUrl, description, id, userId) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this._id = id? new ObjectId(id): null;
    this.userId = userId;
  };

  async save() {
    try {
      const db = getDb();
      let dbOp;
      if (this._id) {
        // Edit
        dbOp = await db.collection("products").updateOne({
          _id: this._id
        }, {
          $set: this
        });
      } else {
        // Add
        dbOp = await db.collection("products").insertOne(this);
      }
      return dbOp;
    } catch (err) {
      throw (err);
    }
  };

  static async fetchAll() {
    const db = getDb();
    const products = await db.collection("products").find().toArray();
    return products;
  }

  static async findById(id) {
    try {
      const db = getDb();
      const product = await db.collection("products").find({
        _id: new ObjectId(id)
      }).next();
      return product;
    } catch (err) {
      throw (err)
    }
  }

  static async deleteById(id) {
    try {
      const db = getDb();
      const product = await db.collection("products").deleteOne({
        _id: new ObjectId(id)
      });
      return product;
    } catch (err) {
      throw (err);
    }
  }

};

module.exports = Product;
