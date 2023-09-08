const mongoose=require('mongoose');

const  Schema=mongoose.Schema;

const customDesignEnquirySchema = new Schema({
	phoneNumber:{
		type:String,
		required:true
}
});

const customDesignEnquiry=mongoose.model('customDesignEnquiry',customDesignEnquirySchema);
module.exports=customDesignEnquiry;
