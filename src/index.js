const express = require("express");
const cors = require("cors");
const router = require('../controller/routes');
const app = express();
app.use(cors());  
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb',extended: true }));
var Port = process.env.PORT || 1000;
app.use("/user",router)
app.get("/",(req,res)=>{
  res.send("welcome to the hst construction")
})
app.listen(Port, () => {
  console.log(`server is listening at port ${Port}`);
});