const express = require('express');
const router = express.Router();
const orders = require('./Schemas/orderSchema');
var upload = require("./multer")
const uuid = require('uuid');
var pool = require('./pool')

router.post('/addOrderDetails', upload.single('logo'), async (req, res) => {
    let { name, email, phone,fullAddress,city,state,pincode,productName,size,quantity } = req.body;
    console.log(req.body);
    console.log(req.file);	
    try {
      
      let  order = new orders({ name:name, email:email, phone:phone,fullAddress:fullAddress,city:city,state:state,pincode:pincode,productName:productName,size:size,quantity:quantity,logo:req.file.originalname });
        await order.save();
        console.log(order._id);
        return res
          .status(200)
          .json({ status: 'true', data: order, message: 'Saved successful' });
     
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  module.exports = router;
