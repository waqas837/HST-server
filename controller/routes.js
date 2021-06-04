const express = require("express");
const router = express.Router();
const {
  singin,
  signup, 
  getData,
  deleteUser,
  udpateUser,
  findSingleUser,
  addProduct,
  getProduct,
  deleteProduct,findSingleProduct,udpateProduct,AdminSignIn,signupAdmin,getallcartSinglelimited,
  addServices,deleteServiceData,findSingleService,getserviceData,updateServiceData,
  addtocart,getallcartSingle,findSingleProductforadd,cartSingleRemove,cartqtyUpdate,updatePrice,
  findSingleCartProduct,makePayment,orders,userdataDetails,aftersalesemptycart,savePriceCalcRecord,getDataCalc,getAllTheProduct,
} = require("./userLogics");
// routes for user account
router.post("/signup", signup);
router.post("/signin", singin);
router.get("/getData", getData);
router.delete("/deleteUser/:id", deleteUser);
router.put("/udpateUser/:id", udpateUser);
router.get("/findSingleUser/:id", findSingleUser);
// routes for the productPanel
router.post("/addProduct", addProduct);
router.get("/getProduct", getProduct); 
router.get("/getAllTheProduct", getAllTheProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/findSingleProduct/:id", findSingleProduct);
router.put("/udpateProduct/:id", udpateProduct);
// routes for admin account
router.post("/signupadmin", signupAdmin);
router.post("/signinadmin", AdminSignIn);
// routes for the admin services 
router.post("/addservice", addServices);
router.get("/getServices", getserviceData);
router.delete("/deleteservice/:id", deleteServiceData);
router.get("/findSingleservice/:id", findSingleService);
router.put("/udpateservice/:id", updateServiceData);
// routes for the addtocart user
router.post("/findSingleProductforadd/:id",findSingleProductforadd);
router.post("/addtocartSingle",addtocart);
router.get("/getallcartSingle/:email",getallcartSingle);
router.get("/getProductlimited",getallcartSinglelimited);
router.post("/cartSingleRemove/:id",cartSingleRemove);
router.put("/cartqtyUpdate/:id",cartqtyUpdate);
router.post("/findSingleCartProduct/:_id",findSingleCartProduct)
// payment method
router.post("/payment",makePayment)
// adding after sales record for customer
router.post("/userdataDetails",userdataDetails)

// getting orders details
router.get("/orders",orders)
// aftersalesemptycart
// note:we have to use the put method to delete a record as put method
// is used for update a record but in fact we are updating our record
// on basis of removed record
router.put("/aftersalesemptycart",aftersalesemptycart)
// save price calculator record
router.post("/savePriceCalcRecord",savePriceCalcRecord)
// get data for the price calculator
router.get("/getDataCalc",getDataCalc)
//udpate the record
router.put("/updatePrice",updatePrice)

module.exports = router;


