const express = require("express"); 
const appAdmin = require("./routes/admin/index.route.js"); 
const path = require("path"); 
require("dotenv").config();  

const app = express(); 
const port = process.env.PORT

// nhung phan connect database . 
const database = require("./config/database.js"); 
database.connect(); 

// phan tich du lieu Json . 
const cors = require('cors');
app.use(cors());

// set up for pug . 
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// de su dung thu uc public . (ghi / tu hieu di vao folder public). 
app.use(express.static(`public`));

// su dung thang app . 
appAdmin(app); 

app.listen( port , () =>{
   console.log(`Thanh cong ${port}`); 
});