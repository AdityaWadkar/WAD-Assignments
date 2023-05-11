const express = require("express")
const db_connect = require("./database")
const Product = require("./models/Product")

const app = express();
app.use(express.json());

app.get("/product", async (req, res) => {
    const products = await Product.find();
    res.send(products)
})

app.post("/product", async (req, res) => {
    const product = await Product.create(req.body);
    // if successfull creation of data, it will return new created data object i.e product
    res.send(product)
})

app.patch("/product", async function (req, res) {
    const { _id, name, price } = req.body
    // const product = await Product.updateOne({ _id }, { name, price }, { new: true })
    const product = await Product.findOneAndUpdate({ _id }, { name, price }, { new: true })
    //                                             where       update data       //optional (returns newly updated data)
    res.send(product);
})

app.delete("/product", async function (req, res) {
    const product = await Product.deleteOne(req.body)
    res.send(product);
})

db_connect.then(() => {
    app.listen(4000, () => {
        console.log("http://localhost:4000")
    })
}).catch(error => console.log(error))