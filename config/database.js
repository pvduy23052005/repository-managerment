
const mongoose = require('../node_modules/mongoose');

module.exports.connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Success");
   } catch {
      console.log("error");
   }
}
// tao model cho database
