const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl =imageUrl;
    this.description = description;
  };

  async save() {
    try {
      const db = getDb();
      const res = await db.collection("products").insertOne(this);
      return res;
    } catch (err) {
      throw (err);
    }
  };

};

module.exports = Product;
