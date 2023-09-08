import React from 'react'
import DemoPage from '../DemoPage';
import logo from './assets/logo.png'
import contactCs from './assets/Ojaswi Soy Food.vcf'
const Ojaswi = () => {
    const Hero = {
        icon: logo,
        name: "Ojaswi Food Pvt Ltd",
        email: "ojaswifoods4013@gmail.com",
        emailLink: "mailto:ojaswifoods4013@gmail.com",
        website: "https://ojaswisoyfoods.com/",
        location: "",
        phonenumber1: "+917795000456",
        phonenumber2: "+917795000456",
        address: "Surya Vihar Colony,Near Dane Baba,Pinto Park,Morar, Gwalior",
        whatsappLink: "https://api.whatsapp.com/send/?phone=917795000456&text=Message+from+Your+Digital+Card&type=phone_number&app_absent=0",
        contactFile: contactCs,
        callLink:'',
        background:bg,
        whatsappSendLink:'https://api.whatsapp.com/send/?phone=917795000456&text=Message+from+Your+Digital+Card&type=phone_number&app_absent=0',
        title:'Darshit Traders',
        titleLink:'https://digitalcardhub.in/ojaswifood',
        fbLink:'https://www.facebook.com/sharer/sharer.php?u=https://digitalcardhub.in/ojaswifood',
        twitterLink:'https://twitter.com/intent/tweet/?url=https://digitalcardhub.in/ojaswifood',
        linkdninLink:'https://www.linkedin.com/shareArticle/?mini=true&url=https://digitalcardhub.in/ojaswifood',
        messageLink:'sms:?body=${encodeURIComponent(https://digitalcardhub.in/ojaswifood)}',
        instaLink:'https://www.instagram.com/share?url=https://digitalcardhub.in/ojaswifood',
        pinterestLink:'https://www.pinterest.com/pin/create/button/?url=https://digitalcardhub.in/ojaswifood',
        telegramLink:'https://t.me/share/url?url=https://digitalcardhub.in/ojaswifood',
        
      };
      const Qr = {
        qrImage: qr,
      };
    
      const About = {
        establish: "2023",
        certificates: "FSSAI Certified",
        description: "Ojaswi Soy Foods is a startup company with a mission to serve pure, truly vegan food products to consumers. Our company, ojaswisoyfoods.com is committed to using only the highest-quality, all-natural ingredients in everything we make. Our company is a testament to the belief that plant-based options can be delicious, nutritious, and accessible to all. We offer a variety of delicious, plant-based products that are perfect for anyone looking to incorporate more vegan options into their diet. Our flagship products include Ojaswi Soy Milk, Ojaswi Tofu, Ojaswi Masala Tofu, Ojaswi Jeera Tofu, and Ojaswi Soy Atta, which are all made from non-GMO soybeans.",
      };
    
      const Ecommerce = [
        {
          name: "SDR - 11 (3 Mtr. Length)",
          image: cpvcsdr1,
          price: "5000",
          offerPrice: "4000",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+SDR - 11 (3 Mtr. Length)&type=phone_number&app_absent=0",
        },
        {
        name: "Reducer Coupler",
          image: cpvcsdr2,
          price: "1000",
          offerPrice: "800",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Reducer Coupler&type=phone_number&app_absent=0",
        },
        {
          name: "Elbow 90 Degree(Brass)",
          image: cpvcsdr9,
          price: "500",
          offerPrice: "400",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Elbow 90 Degree(Brass)&type=phone_number&app_absent=0",
        },
        {
          name: "Coupler",
          image: cpvcpipes1,
          price: "8000",
          offerPrice: "5000",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Coupler&type=phone_number&app_absent=0",
        },
        {
          name: "Pipe in Sch-40 (3 & 5 Mtr. Length)",
          image:cpvcsdr1,
          price: "1200",
          offerPrice: "800",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Pipe in Sch-40 (3 & 5 Mtr. Length)&type=phone_number&app_absent=0",
        },
        {
          name: "End Cap",
          image: cpvcpipes3,
          price: "1000",
          offerPrice: "600",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+End Cap&type=phone_number&app_absent=0",
        },
        {
          name: "Concealed Triangle Valve",
          image: cpvcconcealed1,
          price: "2500",
          offerPrice: "2000",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Concealed Triangle Valve&type=phone_number&app_absent=0",
        },
        {
          name: "Concealed Valve Brass Tee",
          image: cpvcconcealed3,
          price: "2000",
          offerPrice: "900",
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Concealed Valve Brass Tee&type=phone_number&app_absent=0",
        },
      ];
    
      const Product = [
        {
          name: "Hot Side and Cold Down (6')",
          image: cpvcmixer5,
    
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Hot Side and Cold Down (6') &type=phone_number&app_absent=0",
        },
        {
          name: "Rubber O Ring",
          image: cpvcpipes12,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Rubber O Ring&type=phone_number&app_absent=0",
        },
        {
          name: "Reducing Bush",
          image: cpvcpipes6,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Elbow 90 Degree&type=phone_number&app_absent=0",
        },
        {
          name: "Equal Tee",
          image: cpvcpipes2,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Equal Tee&type=phone_number&app_absent=0",
        },
        {
          name: "Reducer Elbow 90 Degree",
          image: cpvcsdr8,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Reducer Elbow 90 Degree&type=phone_number&app_absent=0",
        },
        {
          name: "Concealed Square Valve",
          image: cpvcconcealed2,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Concealed Square Valve&type=phone_number&app_absent=0",
        },
        {
          name: "Brass Mechanism - Short Length",
          image: cpvcconcealed4,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Brass Mechanism - Short Length&type=phone_number&app_absent=0",
        },
        {
          name: "Flange with Rubber Gasket",
          image: cpvcconcealed7,
          whatsappLink: "https://api.whatsapp.com/send/?phone=918889944313&text=Query+about+Flange with Rubber Gasket&type=phone_number&app_absent=0",
        },
      ];
    
      const youtubeLinks = [
        {
          link: "https://youtu.be/1pch-Z-aHsY",
        },
        {
          link: "https://youtu.be/3hg11U0GgPA",
        },
        {
          link: "https://youtu.be/Z7cTTuOZ49E",
        },
        {
          link: "https://youtu.be/cmf8Sniwdls",
        },
      ];
      const gallery = [
        {
          img: bg1,
        },
        {
          img: bg2,
        },
        {
          img: bg3,
        },
        {
          img: bg4,
        },
      ];
    
      const PaymentInfo = {
        paytmNumber:'9713192207',
        googlePayNumber:'9713192207',
        phonePeNumber:'9713192207',
        name:'Darshit',
        accountNumber:'0290000021024352',
        ifscCode:'boi222039',
        bankName:'Bank of India',
        qrImage:qr,
      };
    
      return (
        <div>
          <DemoPage
            hero={Hero}
            qr={Qr}
            about={About}
            ecommerce={Ecommerce}
            youtube={youtubeLinks}
            products={Product}
            gallery={gallery}
            payment={PaymentInfo}
          />
        </div>
      );
}

export default Ojaswi
