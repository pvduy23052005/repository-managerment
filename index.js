const express = require("express"); 
const appAdmin = require("./routes/admin/index.route.js"); 
const methodOverride = require("method-override"); 
require("dotenv").config();  

const app = express(); 
const port = process.env.PORT

// nhung phan connect database . 
const database = require("./config/database.js"); 
database.connect(); 

// phan tich du lieu Json . 
const cors = require('cors');
app.use(cors());

// cau hinh method-override
app.use(methodOverride('_method'));

//Fash : HIEN THI THONG BAO CHO  
const flash = require("express-flash"); 
const  cookieParser = require("cookie-parser"); 
const session = require("express-session"); 
app.use(cookieParser("PHUNGVANDUY")); 
app.use(session({cookie:  { maxAge : 60000}})); 
app.use(flash()); 

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