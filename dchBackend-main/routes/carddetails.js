const express = require("express");
const router = express.Router();
const CardDetails = require("./Schemas/cardDetailsSchema");
var upload = require("./multer");
const uuid = require("uuid");
var pool = require("./pool");

router.post("/addcardDetails", upload.single(""), async (req, res) => {
  try {
    const { customerId, companyname, paymentStatus, cardStatus, createdDate, companyId,cardViewCount } = req.body;

    // Check if companyId already exists in the database
    const existingCard = await CardDetails.findOne({ companyId });

    let uniqueCompanyId = companyId.split(' ').join('');
	console.log(uniqueCompanyId)
    // If companyId already exists, add a number suffix to make it unique
    if (existingCard) {
      let suffix = 0;
      while (true) {
        suffix++;
        uniqueCompanyId = `${companyId}${suffix}`;

        const cardWithUniqueCompanyId = await CardDetails.findOne({ companyId: uniqueCompanyId });
        if (!cardWithUniqueCompanyId) {
          break;
        }
      }
    }

    const newCardDetails = new CardDetails({
      customerId,
      companyname,
      paymentStatus,
      cardStatus,
      createdDate,
cardViewCount,
      companyId: uniqueCompanyId,
      cardImage: req.file,
    });

    const savedCardDetails = await newCardDetails.save();

    return res.status(200).json({ status: true, data: savedCardDetails });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create cardDetails document" });
  }
});

router.post("/updateCardStatus",upload.single(""),async(req,res)=>{
const  {_id,cardStatus}=req.body;
console.log(req.body);
try{
const card = await CardDetails.findOne({_id})
if(card){
card.cardStatus=cardStatus;
await card.save();

return res.status(200).json({status:true,message:"Status Updated"});

}else{
  return res.status(404).json({status:false,message:"Not Found"});
}
}catch(err){
console.log(err);
return res.status(500).json({message:"server Error"});
}
});

router.post("/updateViewCount", upload.single(""), async (req, res) => {
  const { _id, cardViewCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.cardViewCount = cardViewCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/updateProfile",upload.single(""),async (req,res)=>{

const {_id,profile}=req.body;
console.log(req.body);
try{
const card= await CardDetails.findOne({_id})
if(card){
console.log("1",card)
card.profile = profile;
await card.save();
console.log("2",card)

return res.status(200).json({status:true,message:"updated"});


}else{
return res.status(404).json({status:false,message:"Not found"});
}

}catch{
return res.status(500).json({message:'error'})

}

})



router.post("/updateWhatsappClickCount", upload.single(""), async (req, res) => {
  const { _id, whatsappClickCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.whatsappClickCount = whatsappClickCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});



router.post("/updateInstaClickCount", upload.single(""), async (req, res) => {
  const { _id, instaClickCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.instaClickCount = instaClickCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/updateFbClickCount", upload.single(""), async (req, res) => {
  const { _id, fbClickCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.fbClickCount = fbClickCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/updateLinkdinClickCount", upload.single(""), async (req, res) => {
  const { _id, linkdinClickCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.linkdinClickCount = linkdinClickCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});




router.post("/updateContactDownloadCount", upload.single(""), async (req, res) => {
  const { _id, contactDownloadCount } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.contactDownloadCount = contactDownloadCount;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/updateCompanyName", upload.single(""), async (req, res) => {
  const { _id, companyname } = req.body;

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      if(companyname!='undefined'){
      card.companyname = companyname;
      await card.save();}

      return res
        .status(200)
        .json({ status: true, message: "Theme updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/updateCardDesign",upload.any(),async(req,res)=>{
	
	console.log(req.body);
	console.log(req.files);
	const {_id,designId}=req.body;
	let cardFront="";
	let cardBack="";
	

	if(req.files.length!=0)
	{ req.files.map((item)=>{
	if(item.fieldname=='cardFront')
	{
	cardFront=item.originalname;	
	}
	if(item.fieldname=='cardBack')
	{	
	cardBack=item.originalname;
	}
});
}

try{
const card = await CardDetails.findOne({ _id });

	if(card){
	if(designId!='undefined'){
	card.designId=designId;
}
	if(req.files.length!=0)
	{
	if(cardFront!='')
	{
	card.cardFront=cardFront;
	}
	if(cardBack!='')
	{
	card.cardBack=cardBack;
	}
	}
	await card.save();
	console.log(card);
	
	return res.status(200).json({status:true,data:card});
}else{
	return res.status(404).json({status:false,message:'not found'});
}
}
catch(err){
	console.log(err);
	return res.status(500).json({message:"Server"});
	}





});
router.post(
  "/updatepersonelinfo",
  upload.any(),
  async (req, res) => {
    console.log(req.body);
    console.log(req.files);
    const {
      _id,
      fullname,
      position,
      phoneNumber,
      AlternatePhoneNumber,
      whatsappNo,
      Address,
      Email,
      website,
      location,
      AboutUs,
    } = req.body;
    console.log(location)
    let companylogo = "";
    let companyCoverImage="";
    if(req.files.length!=0)
    {
      req.files.map((item)=>{
        if(item.fieldname=='companylogo')
        {
        companylogo = item.originalname;
        }
        if(item.fieldname=='companyCover')
        {
          companyCoverImage=item.originalname
        }
      })
     
    }
    try {
      // Check if a customer with the provided email exists
      const card = await CardDetails.findOne({ _id });

      if (card) {
        if(fullname!='undefined'){
        card.fullname = fullname;}
        if(position!='undefined'){
        card.position = position;}
        if(phoneNumber!='undefined'){
        card.phoneNumber = phoneNumber;}
        if(AlternatePhoneNumber!='undefined'){
        card.AlternatePhoneNumber = AlternatePhoneNumber;}
        if(whatsappNo!='undefined'){
        card.WhatsappNo = whatsappNo;}
        if(Address!='undefined'){
        card.Address = Address;}
        if(Email!='undefined'){
        card.Email = Email;}
        if(website!='undefined'){
        card.website = website;}
        if(location!='undefined'){
        card.location = location;}
        card.AboutUs = AboutUs;
        if(req.files.length!=0)
        {
          if(companylogo!=''){
          card.companylogo = companylogo;}
          if(companyCoverImage!='')
          {
          card.companyCoverImage=companyCoverImage;
          }
        }
        await card.save();
        console.log(card);

        return res
          .status(200)
          .json({
            status: true,
            data: card,
            message: "Personel Info updated successfully",
          });
      } else {
        return res.status(404).json({ status: false, message: "not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);
router.post(
  "/updatesociallinks",
  upload.single("companylogo"),
  async (req, res) => {
    console.log(req.body);
    
    const {
      _id,
      fbLink,
      igLink,
      TwitterLink,
      YoutubeLink,
      PinterestLink,
      LinkdnLink,
      YoutubeVideoLink1,
      YoutubeVideoLink2,
      YoutubeVideoLink3,
      YoutubeVideoLink4,
      YoutubeVideoLink5,
      GoogleMapLink
    } = req.body;
   
    try {
      // Check if a customer with the provided email exists
      const card = await CardDetails.findOne({ _id });

      if (card) {
        // Update the password
        if(fbLink!='undefined'){
        card.fbLink = fbLink; }
        if(igLink!='undefined'){
        card.igLink = igLink; }
        if(TwitterLink!='undefined'){
        card.TwitterLink = TwitterLink;}
        if(YoutubeLink!='undefined'){
        card.YoutubeLink = YoutubeLink;}
        if(PinterestLink!='undefined'){
        card.PinterestLink = PinterestLink;}
        if(LinkdnLink!='undefined'){
        card.LinkdnLink = LinkdnLink;}
        if(YoutubeVideoLink1!='undefined'){
        card.YoutubeVideoLink1 = YoutubeVideoLink1;}
        if(YoutubeVideoLink2!='undefined'){
        card.YoutubeVideoLink2 = YoutubeVideoLink2;}
        if(YoutubeVideoLink3!='undefined'){
        card.YoutubeVideoLink3 = YoutubeVideoLink3;}
        if(YoutubeVideoLink4!='undefined'){
        card.YoutubeVideoLink4 = YoutubeVideoLink4;}
        if(YoutubeVideoLink5!='undefined'){
        card.YoutubeVideoLink5 = YoutubeVideoLink5;}
        if(GoogleMapLink!='undefined'){
        card.GoogleMapLink = GoogleMapLink;}
       
        await card.save();
        console.log(card);

        return res
          .status(200)
          .json({
            status: true,
            data: card,
            message: "Personel Info updated successfully",
          });
      } else {
        return res.status(404).json({ status: false, message: "not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);


router.post(
  "/updatepaymentstatus",
  upload.single(""),
  async (req, res) => {
    console.log(req.body);
    
    const {
      _id,
      paymentStatus,
      createdDate,
      packageAmount
    } = req.body;
   
    try {
      // Check if a customer with the provided email exists
      const card = await CardDetails.findOne({ _id });

      if (card) {
        // Update the paymentstatus
        if(paymentStatus!='undefined'){
        card.paymentStatus = paymentStatus; }
if(packageAmount!='undefined')        
{card.packageAmount=packageAmount;}
     if(createdDate!='undefined'){
card.createdDate=createdDate} 
        await card.save();
        console.log(card);

        return res
          .status(200)
          .json({
            status: true,
            data: card,
            message: "Personel Info updated successfully",
          });
      } else {
        return res.status(404).json({ status: false, message: "not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);



router.post(
  "/updatepayment",
  upload.any(),
  async (req, res) => {
    console.log(req.body);
    console.log(req.files);
    const {
      _id,
      paytmNumber,
      Googlepaynumber,
      phonepenumber,
      bankname,
      Accountholdername,
      bankaccountnumber,
      bankifsccode,
      gst,
    } = req.body;
    let paytmQrimage = "";
    let googlepayQrimage = "";
    let phonepeQrimage = "";
    console.log(req.files[1])
    console.log(req.files)
   if(req.files.length!=0)
  {
    req.files.map((item)=>{
      console.log('asdfghj',item.fieldname)
     if(item.fieldname=="paytmQrimage"){
      
      paytmQrimage = item.originalname;}
      if(item.fieldname=="googlepayQrimage"){
      googlepayQrimage = item.originalname;}
      if(item.fieldname=="phonepeQrimage"){
      phonepeQrimage = item.originalname;}
    })
  }
    try {
      // Check if a customer with the provided email exists
      const card = await CardDetails.findOne({ _id });

      if (card) {
        // Update the password
        if(paytmNumber!='undefined'){
        card.paytmNumber = paytmNumber;}
        if(Googlepaynumber!='undefined'){
        card.Googlepaynumber = Googlepaynumber;}
        if(phonepenumber!='undefined'){
        card.phonepenumber = phonepenumber;}
        if(bankname!='undefined'){
        card.bankname = bankname;}
        if(Accountholdername!='undefined'){
        card.Accountholdername = Accountholdername;}
        if(bankaccountnumber!='undefined'){
        card.bankaccountnumber = bankaccountnumber;}
        if(bankifsccode!='undefined'){
        card.bankifsccode = bankifsccode;}
        if(gst!='undefined'){
        card.gst = gst}
        if (req.files.length != 0) {
          if(paytmQrimage!="")
          {
          card.paytmQrimage = paytmQrimage;
          }
          if(phonepeQrimage!="")
          {
          card.phonepeQrimage = phonepeQrimage;
          }
          if(googlepayQrimage!="")
          {
          card.googlepayQrimage = googlepayQrimage;
          }
        }
        await card.save();
        console.log(card);

        return res
          .status(200)
          .json({
            status: true,
            data: card,
            message: "Payment Info updated successfully",
          });
      } else {
        return res.status(404).json({ status: false, message: "not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);


router.post("/updateproduct", upload.any(),async (req, res) => {
  const { _id } = req.body;
  const products=JSON.parse(req.body.productName)
console.log('list',req.body.productName)
  try {
    // Check if a customer with the provided _id exists
    const card = await CardDetails.findOne({ _id });

    if (card) {

      card.products=products
      console.log('first',card.products)
      
      products.map((item)=>{
	if(item!=null){
        req.files.map((img,index2)=>{

          
  if(item.index==img.fieldname.slice(-1))
  {    if(img!=null){
            card.products[img.fieldname.slice(-1)].productimage=img.originalname
  }
          }

        })
}
      })

      
      console.log('third',card.products)
      await card.save();
     
      

      return res.status(200).json({
        status: true,
        data: card,
        message: "Products updated successfully",
      });
    } else {
      return res.status(404).json({ status: false, message: "Card not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/deleteproduct', upload.single(''),async (req, res) => {
  const { cardId, productId } = req.body;
  console.log(req.body)

  try {
    // Find the card by cardId in the database
    const card = await CardDetails.findById(cardId);
      console.log(card);
    // If the card doesn't exist, return an error response
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    console.log(card.products);

    // Find the product by productId in the card's product array
    const productIndex = card.products.findIndex((product) =>product._id.toString() === productId);
    // If the product doesn't exist, return an error response
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Remove the product from the card's product array
    card.products.splice(productIndex, 1);

    // Save the updated card in the database
    await card.save();

    // Return a success response
    return res.json({ status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/updateecommerce", upload.any(),async (req, res) => {
  const { _id } = req.body;
  const products=JSON.parse(req.body.products)
console.log('list',req.body.productName)
  try {
    // Check if a customer with the provided _id exists
    const card = await CardDetails.findOne({ _id });

    if (card) {

      card.ecommerce=products
      console.log('first',card.ecommerce)
      
      products.map((item)=>{
	if(item!=null){
        req.files.map((img,index2)=>{

          
  if(item.index==img.fieldname.slice(-1))
  {	
	if(img!=null){
            card.ecommerce[img.fieldname.slice(-1)].productimg=img.originalname
  }
          }

        })
}
      })

      
      console.log('third',card.ecommerce)
      await card.save();
     
      

      return res.status(200).json({
        status: true,
        data: card,
        message: "Products updated successfully",
      });
    } else {
      return res.status(404).json({ status: false, message: "Card not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/deleteecommerceproduct', upload.single(''),async (req, res) => {
  const { cardId, productId } = req.body;
  console.log(req.body)

  try {
    // Find the card by cardId in the database
    const card = await CardDetails.findById(cardId);

    // If the card doesn't exist, return an error response
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    // Find the product by productId in the card's product array
    const productIndex = card.ecommerce.findIndex((product) =>product._id.toString() === productId);

    // If the product doesn't exist, return an error response
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Remove the product from the card's product array
    card.ecommerce.splice(productIndex, 1);

    // Save the updated card in the database
    await card.save();

    // Return a success response
    return res.json({ status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
router.post("/updategallery", upload.any(),async (req, res) => {
  const { _id } = req.body;
  const gallery=JSON.parse(req.body.gallery)
console.log('list',req.files)
  try {
    // Check if a customer with the provided _id exists
    const card = await CardDetails.findOne({ _id });

    if (card) {

      card.gallery=gallery
      console.log('first',card.gallery)
      
      gallery.map((item)=>{
	if(item!=null){   
     req.files.map((img,index2)=>{

          
  if(item.index==img.fieldname.slice(-1))
  {	if(img!=null){
            card.gallery[img.fieldname.slice(-1)].image=img.originalname
  }
          }

        })
}      
})

      
      console.log('third',card.gallery)
      await card.save();
     
      

      return res.status(200).json({
        status: true,
        data: card,
        message: "Products updated successfully",
      });
    } else {
      return res.status(404).json({ status: false, message: "Card not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/deletegallery', upload.single(''),async (req, res) => {
  const { cardId, galleryId } = req.body;
  console.log(req.body)

  try {
    // Find the card by cardId in the database
    const card = await CardDetails.findById(cardId)

    // If the card doesn't exist, return an error response
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    // Find the product by productId in the card's product array
    const productIndex = card.gallery.findIndex((product) => product._id.toString() === galleryId);

    // If the product doesn't exist, return an error response
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Remove the product from the card's product array
    card.gallery.splice(productIndex, 1);

    // Save the updated card in the database
    await card.save();

    // Return a success response
    return res.json({ status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



router.post("/updateCardTheme", upload.single(""), async (req, res) => {
  const { _id, themeid } = req.body;
  console.log(req.body);

  try {
    // Check if a customer with the provided email exists
    const card = await CardDetails.findOne({ _id });

    if (card) {
      // Update the password
      card.themeid = themeid;
      await card.save();

      return res
        .status(200)
        .json({ status: true, message: "Company Name updated successfully" });
    } else {
      return res.status(404).json({ status: false, message: "not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/getcardDetails", upload.single(""), async (req, res) => {
  try {
    const { customerId } = req.body;

    const cardDetails = await CardDetails.findOne({ customerId });

    if (!cardDetails) {
      return res.status(404).json({ error: "Card details not found" });
    }
    console.log(cardDetails);
    return res.status(200).json({ status: true, data: cardDetails });
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve card details" });
  }
});
router.get('/displayallcards', async (req, res) => {
    try {
      const cards = await CardDetails.find();
      return  res.status(200).json(cards)
    } catch (error) {
      console.log(error)
      return res.status(500).json({status:false})
    }
  });
router.post("/getcardDetailsbycompanyid", upload.single(""), async (req, res) => {
  try {
    const { companyId } = req.body;
    console.log(req.body.companyId)

    const cardDetails = await CardDetails.findOne({ companyId });

    if (!cardDetails) {
      return res.status(404).json({ error: "Card details not found" });
    }
    console.log(cardDetails);
    return res.status(200).json({ status: true, data: cardDetails });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed to retrieve card details" });
  }
});

module.exports = router;
