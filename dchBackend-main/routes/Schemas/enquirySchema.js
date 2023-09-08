const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const enquirySchema= new Schema({
    
	name:{
	       type:String,
		required:true
		},
	number:{
		type:String,
		required:true	
	},
	query:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true	
	}
});

const Enquiry=mongoose.model('Enquiries',enquirySchema);
module.exports=Enquiry;
