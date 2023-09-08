import React from "react";
import DemoPage from "./DemoPage";
import logo from "./assets/gehnalogo.jpg";
import contactCs from "./assets/Darshit Traders.vcf";
import bg from './assets/bg.jpg'
import cpvcsdr1 from './assets/2.png'
import cpvcsdr2 from './assets/3.png'
import cpvcsdr3 from './assets/4.png'
import cpvcsdr4 from './assets/5.png'
import cpvcsdr5 from './assets/6.png'
import cpvcsdr6 from './assets/7.png'
import cpvcsdr7 from './assets/8.png'
import cpvcsdr8 from './assets/9.png'
import cpvcsdr9 from './assets/10.png'
import cpvcpipes1 from './assets/12.png'
import cpvcpipes2 from './assets/13.png'
import cpvcpipes3 from './assets/14.png'
import cpvcpipes4 from './assets/15.png'
import cpvcpipes5 from './assets/16.png'
import cpvcpipes6 from './assets/17.png'
import cpvcpipes7 from './assets/18.png'
import cpvcpipes8 from './assets/19.png'
import cpvcpipes9 from './assets/20.png'
import cpvcpipes10 from './assets/21.png'
import cpvcpipes11 from './assets/22.png'
import cpvcpipes12 from './assets/23.png'
import cpvcconcealed1 from './assets/25.png'
import cpvcconcealed2 from './assets/26.png'
import cpvcconcealed3 from './assets/27.png'
import cpvcconcealed4 from './assets/28.png'
import cpvcconcealed5 from './assets/29.png'
import cpvcconcealed6 from './assets/30.png'
import cpvcconcealed7 from './assets/31.png'
import cpvcconcealed8 from './assets/32.png'
import cpvcconcealed9 from './assets/33.png'
import cpvcmixer1 from './assets/35.png'
import cpvcmixer2 from './assets/36.png'
import cpvcmixer3 from './assets/37.png'
import cpvcmixer4 from './assets/38.png'
import cpvcmixer5 from './assets/39.png'
import cpvcmixer6 from './assets/40.png'
import cpvcmixer7 from './assets/41.png'
import cpvcmixer8 from './assets/42.png'
import cpvcmixer9 from './assets/43.png'
import cpvcmixer10 from './assets/44.png'
import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'
import bg3 from './assets/bg3.png'
import bg4 from './assets/bg4.png'
import qr from './assets/qr.png'

const DarshitTraders = () => {
  const Hero = {
    icon: logo,
    name: "Darshit Traders",
    email: "jains.abhishek85@gmail.com",
    emailLink: "mailto:jains.abhishek85@gmail.com",
    website: "http://www.darshittraders.com/",
    location: "https://goo.gl/maps/YaqsarVxb6kMjNg97",
    phonenumber1: "+919713192207",
    phonenumber2: "+918889944313",
    address: "Near Dargah,Parking No.6,Transport Nagar Gwalior 474010 Madhya Pradesh",
    whatsappLink: "https://api.whatsapp.com/send/?phone=919425310099&text=Message+from+Your+Digital+Card&type=phone_number&app_absent=0",
    contactFile: contactCs,
    callLink:'',
    background:bg,
    whatsappSendLink:'https://api.whatsapp.com/send/?phone=919425310099&text=Message+from+Your+Digital+Card&type=phone_number&app_absent=0',
    title:'Darshit Traders',
    titleLink:'https://digitalcardhub.in/darshittraders',
    fbLink:'https://www.facebook.com/sharer/sharer.php?u=https://digitalcardhub.in/darshittraders',
    twitterLink:'https://twitter.com/intent/tweet/?url=https://digitalcardhub.in/darshittraders',
    linkdninLink:'https://www.linkedin.com/shareArticle/?mini=true&url=https://digitalcardhub.in/darshittraders',
    messageLink:'sms:?body=${encodeURIComponent(https://digitalcardhub.in/darshittraders)}',
    instaLink:'https://www.instagram.com/share?url=https://digitalcardhub.in/darshittraders',
    pinterestLink:'https://www.pinterest.com/pin/create/button/?url=https://digitalcardhub.in/darshittraders',
    telegramLink:'https://t.me/share/url?url=https://digitalcardhub.in/darshittraders',
    
  };
  const Qr = {
    qrImage: qr,
  };

  const About = {
    establish: "2012",
    certificates: "Certified",
    description: "The assurance of quality that Darshit Traders provides is also important, as it helps to give customers peace of mind when making a purchase. Knowing that the PVC pipes are of high quality and can be trusted for their intended use can be a big factor in the decision to purchase from them.Ultimately, when looking for PVC pipes, it's important to consider factors such as quality, durability, price, and the reputation of the supplier. Darshit Traders may be a good place to start, but it's always a good idea to do some research and compare options before making a final decision.",
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
};

export default DarshitTraders;
