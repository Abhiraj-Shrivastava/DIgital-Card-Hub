const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
  
    adminId: {
    type: String,
    required: true
  },
    adminPassword: {
    type: String,
    required: true
  },
  
 
  
});

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = SuperAdmin;
