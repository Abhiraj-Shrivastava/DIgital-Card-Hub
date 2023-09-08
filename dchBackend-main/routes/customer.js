const express = require('express');
const router = express.Router();
const customerLogin = require('./Schemas/customerLoginSchema');
var upload = require("./multer")
const uuid = require('uuid');
var pool = require('./pool')

router.post('/customerLogin', upload.single(), async (req, res) => {
    let { name, email, phone, password } = req.body;
    console.log(req.body);
    try {
      let customer = await customerLogin.findOne({ $or: [{ email }, { phone }] });
      console.log(!customer);
  
      if (!customer) {
        customer = new customerLogin({ name, email, phone, password });
        await customer.save();
        console.log(customer._id);
        return res
          .status(200)
          .json({ status: 'true', mobileNumber: phone, message: 'Login successful' });
      } else {
        console.log(
    'assjksn'
        )
        return res.status(200).json({
          status: 'exist',
          mobileNumber: phone,
          message: 'Phone number already registered',
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
router.post('/address',upload.single(''),async(req,res)=>{

let{_id}=req.body;
let addressData=JSON.parse(req.body.address);
console.log(req.body.address)
try{
 let customer =await customerLogin.findOne({_id});
  
 if(!customer){
	return res.status(404).json({message:"not found"});
}

customer.address=addressData;
await customer.save();
return res.status(200).json({status:true,message:"found"});



}catch(err){

console.log(err)
return res.status(500).json({message:"server error"});

}

})

router.post('/chkLogin',upload.single(''), async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if a customer with the provided email exists
      const customer = await customerLogin.findOne({ email });
  
      if (customer) {
        // Compare the provided password with the stored password
        if (customer.password === password) {
          return res.status(200).json({ status: true,data:customer, message: 'Login successful' });
        } else {
          return res.status(401).json({ status: false, message: 'Incorrect password' });
        }
      } else {

        return res.status(404).json({ status: false, message: 'Customer not found' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  router.post('/getUserDataById',upload.single(''), async (req, res) => {
    try {
      const { _id } = req.body;
  
      const customer = await customerLogin.findOne({ _id });
  
      if (!customer) {
        return res.status(404).json({ error: 'User details not found' });
      }
  
      return res.status(200).json({status:true,data:customer});
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve user details' });
    }
  });

  router.post('/updatePassword',upload.single(''),async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if a customer with the provided email exists
      const customer = await customerLogin.findOne({ email });
  
      if (customer) {
        // Update the password
        customer.password = password;
        await customer.save();
        
        return res.status(200).json({ status: true, message: 'Password updated successfully' });
      } else {
        return res.status(404).json({ status: false, message: 'Customer not found' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  


  module.exports = router;
