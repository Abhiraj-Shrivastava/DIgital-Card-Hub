const { json } = require('express');
var express = require('express');
const upload = require('./multer');
const pool = require('./pool');
var router = express.Router();
var Enquiry=require('./Schemas/enquirySchema');

/* GET home page. */

  router.post('/addenquiry',upload.single() , async (req, res) => {
    console.log("sssssssssss",req.body)
    try {
      const enquiry = new Enquiry(req.body);
      await enquiry.save();
  
      return  res.status(200).json({status:true})
    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({status:false})
      
    }
  });
  
  
  
  router.get('/displayallenquiries', async (req, res) => {
   
    

    try {
      const enquiries = await Enquiry.find();
      return  res.status(200).json(enquiries)
    } catch (error) {
      console.log(error)
      return res.status(500).json({status:false})
    }
  });

 
module.exports = router;
