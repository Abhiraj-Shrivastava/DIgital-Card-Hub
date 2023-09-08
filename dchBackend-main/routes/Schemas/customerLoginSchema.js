const mongoose = require('mongoose');

const customerLoginSchema = new mongoose.Schema({
  
    name: {
    type: String,
    required: true
  },
    email: {
    type: String,
    required: true,
    unique:true
  },
    phone: {
    type: Number,
    required: true,
    minLength:10,
    maxLength:12,
    unique:true
  },
    password: {
    type: String,
    required: true,
  },
  address:{
	name:{type:String},
	phone:{type:String},
	email:{type:String},
	fullAddress:{type:String},
	city:{type:String},
	state:{type:String},
	pincode:{type:String}
	}
  
 
  
});

const customerLogin = mongoose.model('customerLogin', customerLoginSchema);

module.exports = customerLogin;
