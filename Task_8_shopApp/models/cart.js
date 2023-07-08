const fs = require('fs');
const path = require('path');
const { mainModule } = require('process');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);


module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { 
                products: [],
                totalPrice: 0
            };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            // Analyze cart
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // Add product with qty = 1 or increase qty by 1
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        })
    }
}