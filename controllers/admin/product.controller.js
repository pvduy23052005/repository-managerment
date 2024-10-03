
const Products = require("../../models/product.model.js");

module.exports.index = async (req, res) => {
   let find = {
      hienThi : false 
   }

   const records = await Products.find(find); 
   
   res.render("admin/pages/product/index.pug", {
      pageTitle: "Trang chu",
      product : records
   }); 
}

//  [GET] /admin/products/deleted/:id
module.exports.delete = async (req, res) => {
   try {
      await Products.updateOne( {_id : req.params.id} , { hienThi : true}); 
      req.flash("success" , "Xoa thanh cong"); 
   } catch (error) {
      req.flash("error" , "Xoa that bai ");
   }
   res.redirect("/admin/products"); 
}