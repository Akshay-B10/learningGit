const { ObjectId } = require("mongodb");

const getDb = require("../util/database").getDb;

class User {
  constructor(name, email, password, cart, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this._id = id;
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

  addToCart(product) {
    const productIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() == product._id.toString();
    });
    let newCartItems = [...this.cart.items];
    if (productIndex >= 0) {
      newCartItems[productIndex].quantity = newCartItems[productIndex].quantity + 1;
    } else {
      newCartItems.push({
        productId: new ObjectId(product._id),
        quantity: 1
      });
    }
    const newCart = {
      items: newCartItems
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne({
        _id: new ObjectId(this._id)
      }, {
        $set: {
          cart: newCart
        }
      });
  };

  getCartProducts() {
    const db = getDb();
    let productMap = new Set();
    const idList = this.cart.items.map(item => {
      productMap[item.productId] = item.quantity;
      return item.productId;
    });
    return db
      .collection("products").find({
        _id: {
          $in: idList
        }
      })
      .toArray()
      .then(products => {
        return products.map(product => {
          return {
            ...product,
            quantity: productMap[product._id]
          }
        })
      })
      .catch(err => {
        console.log(err);
        throw (err)
      });
  };

  deleteCartProduct(id) {
    const cartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== id;
    });
    const db = getDb();
    return db
      .collection("users")
      .updateOne({
        _id: new ObjectId(this._id)
      }, {
        $set: {
          cart: {
            items: cartItems
          }
        }
      })
  }

  createOrder() {
    const db = getDb();
    return this
      .getCartProducts()
      .then((cartProducts) => {
        return db
          .collection("orders")
          .insertOne({
            items: cartProducts,
            userId: new ObjectId(this._id)
          })
      })
      .then(res => {
        return db
          .collection("users")
          .updateOne({
            _id: new ObjectId(this._id)
          }, {
            $set: { cart: { items: [] } }
          })
      })
      .catch(err => {
        throw (err)
      })
  }

  getOrders() {
    const db = getDb();
    return db
      .collection("orders")
      .find({
        userId: new ObjectId(this._id)
      })
      .toArray()
  }

}

module.exports = User;
