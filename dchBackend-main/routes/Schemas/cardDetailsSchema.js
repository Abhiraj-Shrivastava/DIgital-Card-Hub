const mongoose = require('mongoose');

const cardDetailsSchema = new mongoose.Schema({
 
  customerId: {
    type: String,
    required: true,
    unique:true
  },
cardViewCount:{
type:Number,
default:0
},
profile:{
type:String,
default:"false"
},
whatsappClickCount:{
type:Number,
default:0
},
instaClickCount:{
type:Number,
default:0
},
fbClickCount:{
type:Number,
default:0
},
linkdinClickCount:{
type:Number,
default:0
},
contactDownloadCount:{
type:Number,
default:0
},
  companyId: {
    type: String,
    required: true,
    unique:true
  },
  companyname: {
    type: String,
    required: true,
    default:''
  },
  paymentStatus: {
    type: String,
    required: true,
    default:''
  },
  cardStatus: {
    type: String,
    required: true,
    default:''
  },
  createdDate: {
    type: String,
    required: true,
    default:''
  },
 packageAmount:{
	type:Number,
	default:0
},
  themeid: {
    type: Number,
  },
  companyCoverImage: {
    type: String,
    default:''
    
  },
  cardFront:{
        type:String,
	default:'' 
	},
  cardBack:{
	type:String,
	default:''	
},	
designId:{
type:Number,
},
  companylogo: {
    type: String,
    default:''
    
  },
  fullname: {
    type: String,
    default:''
  },  
  position: {
    type: String,
    default:''
    
  },
  phoneNumber: {
    type: Number,
    minlength:10,
    maxlength:11,
    
  },
  AlternatePhoneNumber: {
    type: Number,
    minlength:10,
    maxlength:11,
    
  },
  WhatsappNo: {
    type: Number,
    minlength:10,
    maxlength:11,
    
  },
  Address: {
    type: String,
    default:''
  },
  Email: {
    type: String,
    default:''
  },
  website: {
    type: String,
    default:''
  },
  location: {
    type: String,
    default:''
  },
  CompanyEstDate: {
    type: String,
    default:''
  },
  AboutUs: {
    type: String,
    default:''
  },
  fbLink: {
    type: String,
    default:''
  },
  TwitterLink: {
    type: String,
    default:''
  },
  igLink: {
    type: String,
    default:''
  },
  LinkdnLink: {
    type: String,
    default:''
  },
  YoutubeLink: {
    type: String,
    default:''
  },
  PinterestLink: {
    type: String,
    default:''
  },
  YoutubeVideoLink1: {
    type: String,
    default:''
  },
  YoutubeVideoLink2: {
    type: String,
    default:''
  },
  YoutubeVideoLink3: {
    type: String,
    default:''
  },
  YoutubeVideoLink4: {
    type: String,
    default:''
  },
  YoutubeVideoLink5: {
    type: String,
    default:''
  },
  GoogleMapLink: {
    type: String,
    default:''
  },
  paytmNumber: {
    type: Number,
  },
  Googlepaynumber: {
    type: Number,
  },
  phonepenumber: {
    type: Number,
  },
  bankname: {
    type: String,
    default:''
  },
  Accountholdername: {
    type: String,
    default:''
  },
  bankaccountnumber: {
    type: Number,
  },
  bankifsccode: {
    type: String,
    default:''
  },
  gst: {
    type: String,
    default:''
  },
  paytmQrimage: {
    type: String,
    default:''
  },
  googlepayQrimage: {
    type: String,
    default:''
  },
  phonepeQrimage: {
    type: String,
    default:''
  },
  products: [
    {
      productName: {
        type: String,
        default: '',
      },
      productimage: {
        type: String,
        default: '',
      },
    },
  ],
  ecommerce: [
    {
      productname: {
        type: String,
        default: '',
      },
      price: {
        type: String,
        default: '',
      },
      offerprice: {
        type: String,
        default: '',
      },
      productimg: {
        type: String,
        default: '',
      },
    },
  ],
  gallery: [
    {
      index:{
        type:String,
        default:''
      },
      image: {
        type: String,
        default: '',
      },
    },
  ],

});

const CardDetails = mongoose.model('cardDetails', cardDetailsSchema);

module.exports = CardDetails;
