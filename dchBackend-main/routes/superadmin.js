const { json } = require('express');
var express = require('express');
const pool = require('./pool');
var router = express.Router();
const upload = require('./multer');

var SuperAdmin=require('./Schemas/SuperAdminSchema')

// async function insertAdmin(adminId, adminPassword) {
//     try {
//       const admin = new SuperAdmin({ adminId, adminPassword });
//       await admin.save();
//       console.log('Admin credentials inserted successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // Call insertAdmin function with desired credentials
//   const adminId = 'ibuzz123@gmail.com';
//   const adminPassword = 'Ibuzz9999';
//   insertAdmin(adminId, adminPassword);

router.post('/checkAdmin', async (req, res) => {
    const { adminId, adminPassword } = req.body;
    console.log(adminId)
    try {
      const admin = await SuperAdmin.findOne({ adminId });
      if (admin && admin.adminPassword === adminPassword) {
        console.log('Admin credentials verified successfully');
        res.json({ status: true });
      } else {
        console.log('Incorrect admin credentials');
        res.status(401).json({ error: 'Incorrect admin credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;
