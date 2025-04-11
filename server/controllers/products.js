const products = require("../models/products");
const Product = require("../models/products");

exports.getALLProducts = async (req, res, next) => {
    try{
        const data = await Product.find();
        if (data && data.length != 0){
            return res.status(200).send({
                message: "Products found",
                payload: data
            });
        }
        res.status(404).send({
            message: "Products not found"
        })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getProductById = async (req, res, next) => {
    try{
        const data = await Product.findById(req.params.id);
        if (data){
            return res.status(200).send({
                message: "Product found",
                payload: data
            });
        }
        res.status(404).send({
            message: "Product not found"
        })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createProduct = async (req, res, next) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    try{
      const data = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
      });
      const result = await data.save();
      if(result){
        return res.status(201).send({
            success:true,
            message: "Product created",
            payload: result
        });
      }
      res.status(500).send({
        success:true,
        message: "Product not created"
    })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updateProduct = async (req, res, next) => {
    try{
        const data = {
          name: req.body.name,
          platform: req.body.platform,
          developer: req.body.developer,
          price: req.body.price
        };
        const result = await Product.findByIdAndUpdate(req.params.id, data);
        if(result){
          return res.status(200).send({
              message: "Product updated",
              payload: result
          });
        }
        res.status(500).send({
            message: "Product not updated"
        })
      } catch (err){
          res.status(500).send(err);
      }
};
exports.deleteProduct = async (req, res, next) => {
    try{
        const result = await  Product.findOneAndDelete({ id: Number(req.params.id) });
        if(result){
          return res.status(200).send({
              message: "Product deleted",
              payload: result
          });
        }
        res.status(500).send({
            message: "Product not deleted"
        })
      } catch (err){
          res.status(500).send(err);
      }
};