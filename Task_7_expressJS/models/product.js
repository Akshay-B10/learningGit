const path = require("path");
const fs = require("fs");

const rootDir = require("../util/path");

module.exports = class Product {
    constructor (title, size) {
        this.title = title;
        this.size = size;
    }

    save() {
        const filePath = path.join(rootDir, "data", "products.json");
        fs.readFile(filePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetch() {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        })
    }
}