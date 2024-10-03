// tao model cho data base  .  
const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater"); 
mongoose.plugin(slug); 

// dinh dang cac truong muon lay ra trong database . 
const productSchema = new mongoose.Schema({
   product_category_id : {
      type : String , 
      default : ""
   } ,  
   TenSanPham: String,
   SoLuong: Number,
   slug : {
      type : String , 
      slug : "TenSanPham",
      unique : true// tao slug la duy nhat .
   },
   hienThi: {
      type : Boolean, 
      default :false, 
   },
   hinhAnh: String,
   gia: Number,
   giam: Number, 
   status : String ,
   position : Number
}, {
   timestamps : true 
}
);

const Product = mongoose.model('Product', productSchema, "products");
module.exports = Product; 