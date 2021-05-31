const mongoose = require("mongoose");
const validator = require("validator");
mongoose
  .connect("mongodb+srv://hst:hst@cluster0.pds0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(`DB connection failed ${err}`));
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
const userData = new mongoose.Schema({ 
  email: {
    unique: true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  
});
//admin
const admin = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});


// Product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  qty: {
    type: String,
    default: 0,
  },
  selectedFile: String,
  price: {
    type: String,
  },
  description: {
    type: String,
  },
}); 
// Product schema
const product = new mongoose.Schema({
 
})



// addtocart schema
const addtocart = new mongoose.Schema({
  email:{
    type:String,
  },
  title: {
    type: String,
  },
  qty: {
    type: String,
    default: 0,
  },
  selectedFile: String,
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  
});
// Services schema
const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },

  price: {
    type: String,
  },
  description: {
    type: String,
  },
});


const orders = new mongoose.Schema({
  totalprice: {
    type: String,
  },
  useremail: {
    type: String,

  },
});
// price calculator
const priceCalc = new mongoose.Schema({
  CementPrice: {
    type:Number,
    required:true
  },
  OneMarlaPrice: {
    type:Number,
    required:true
  },
  SandPrice: {
    type:Number,
    required:true
  },
  SmallStonesPrice: {
    type:Number,
    required:true
  },
  qtyForCement:  {
    type:Number,
    required:true
  },
  qtyForSand: {
    type:Number,
    required:true
  },
  qtyForSmallStones: {
    type:Number,
    required:true
  },
});
const usersignup = new mongoose.model("usersignup", userData);
const Product = new mongoose.model("productData", productSchema);
const AdminData = new mongoose.model("adminData", admin);
const ServiceData = new mongoose.model("serviceData", serviceSchema);
const cartadd = new mongoose.model("addtocartitems", addtocart);
const custmOrders = new mongoose.model("customerorders", orders);
const priceCalculator = new mongoose.model("priceCalcultr", priceCalc);

module.exports = {
  usersignup,
  Product,
  AdminData,
  ServiceData,
  cartadd,
  custmOrders,priceCalculator
};
