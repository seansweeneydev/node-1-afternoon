const products = require ('../products.json');

const getProduct = (req, res) => {
    const item = products.find(element => element.id === Number(req.params.id));
    if (!item) {
        return res.status(500).send("No soup for you");
    }
    res.status(200).send(item);
}

module.exports = getProduct;