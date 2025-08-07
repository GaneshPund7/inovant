 const {models} = require("../../config");
 const path = require('path');
 
async function getProduct(req, res) {
  try {
    const products = await models.Product.findAll({
      include: [{
        model: models.ProductImage,
        as: 'images',        
        attributes: ['imageUrl'],  
      }],
    });
    console.log("Products:", products);

    return res.status(200).json({
      message: "Products found successfully",
      result: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}
 
async function addProduct(req, res) {
  const { productName, sku, price } = req.body;

  if (!productName || !sku || !price) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
 
    const product = await models.Product.create({ productName, sku, price });

 
    if (req.files && req.files.length > 0) {
      const imageRecords = req.files.map(file => ({
        productId: product.id,
        imageUrl: `/uploads/${file.filename}`,  
      }));

      console.log("Image  :", imageRecords);

      await models.ProductImage.bulkCreate(imageRecords);
    }

    return res.status(201).json({
      message: "Product created successfully",
      productId: product.id,
    });
  } catch (error) {
    console.error("Add product error:", error);
    return res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    })
  }
}


// async function updateProduct ( req, res){
//     const { id } = req.params;
 
//     try{         
//      const updated = await models.Product.update(req.body, {
//       where: { id: id },
//     });
//     if(!updated){
//         return res.status(404).json({message: "Product not found"});
//     }
//        return  res.status(200).json({message: "Product updated successfuly", 
//         result: updated
//       })
//     }catch(error){
        
//        return res.status(404).json({message: "Somthing went wrong", error: error})
//     }
// }

async function updateProduct(req, res) {
  const { id } = req.params;

  try {
    // 1. Update basic product details
    const [updated] = await models.Product.update(req.body, {
      where: { id: id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 2. If new images uploaded
    if (req.files && req.files.length > 0) {
      // Optional: Delete old images from DB
      await models.ProductImage.destroy({ where: { productId: id } });

      // Optional: Also delete old files from disk
      // You can use fs.unlinkSync or fs.promises.unlink

      // 3. Add new images to DB
      const imageRecords = req.files.map(file => ({
        productId: id,
        imageUrl: `/uploads/${file.filename}`,
      }));

      await models.ProductImage.bulkCreate(imageRecords);
    }

    return res.status(200).json({
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error("Update product error:", error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}

async function deleteProduct(req, res){
    const { id } = req.params;

    try{
       await models.Product.destroy({where: { id: id }});
      return  res.status(200).json({message: "Product deleted successfully"});
    }catch(error){
      
       return res.status(404).json({message: 'Somting went wrong', error: error})
    }

}

module.exports = {getProduct, addProduct, updateProduct, deleteProduct}

