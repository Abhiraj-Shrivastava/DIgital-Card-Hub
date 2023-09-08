import logo from './logo.svg';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from './Components/Digital Card Website/Digital Card User Interface/Pages/Home';
import DCLogin from './Components/Digital Card Website/Digital Card User Interface/Pages/DCLogin';
import DCSignUp from './Components/Digital Card Website/Digital Card User Interface/Pages/DCSignUp';
import DemoPage from './Components/DemoPage/DemoPage';
import DarshitTraders from './Components/DemoPage/DarshitTraders';
import UserDashboard from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/UserDashboard';
import ChangePassword from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/ChangePassword';
import CompanyName from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/CompanyName';
import ThemePage from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/ThemePage';
import Information from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Information';
import Links from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Links';
import Payment from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Payment';
import Products from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Products';
import Ecommerce from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Ecommerce';
import Gallery from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Gallery';
import Theme1 from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/Theme1';
import Card from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/Card';
import LoadingScreen from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/LoadingScreen';
import NFCCard from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/NFCCard';
import { HashRouter } from "react-router-dom";
import Preview from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Preview';
import AdminLogin from './Components/Administrator/Login/AdminLogin';
import DashBoard from './Components/Administrator/Login/DashBoard';
import Compatibility from './Components/Digital Card Website/Digital Card User Interface/Components/Compatibility';
import DesignUpload from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/DesignUpload';
import Packages from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/Packages';
import PaymentConfirmation from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PaymentConfirmation';
import HowToUse from './Components/Digital Card Website/Digital Card User Interface/Components/HowToUse';
import PartialDesignUploadPage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialDesignUploadPage';
import LoadingScreen1 from './Components/Digital Card Website/Digital Card User Interface/Pages/LoadingScreen1';
import AddressPage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/AddressPage';
import PartialPackage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialPackage';
import PartialConfirmation from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialConfirmation';
import ProductsPage from './Components/Digital Card Website/Digital Card User Interface/Components/ProductsPage';
import ProductCompoent from './Components/Digital Card Website/Digital Card User Interface/Components/ProductCompoent';
import OrderForm from './Components/Digital Card Website/Digital Card User Interface/Components/OrderForm';
function App() {
  return (
   
    <div>
    <HashRouter>
      <Routes>
        {/* DIGITAL CARD WEBSITE ROUTER START */}
					<Route element={<HomePage />} path="/home" />
					<Route element={<DCLogin />} path="/digitalcardlogin" />
					<Route element={<DCSignUp />} path="/digitalcardsignup" />
					<Route element={<DemoPage />} path="/demopage" />
					<Route element={<DarshitTraders />} path="/darshittraders" />
					<Route element={<UserDashboard />} path="/userdashboard" />
					<Route element={<ChangePassword />} path="/changepassword" />
					<Route element={<CompanyName />} path="/companyname" />
					<Route element={<ThemePage />} path="/themepage" />
					<Route element={<Information />} path="/information" />
					<Route element={<Links />} path="/links" />
					<Route element={<Payment />} path="/payment" />
					<Route element={<Products />} path="/products" />
					<Route element={<Ecommerce />} path="/ecommerce" />
					<Route element={<Gallery />} path="/gallery" />
					<Route element={<Card />} path="/card/:companyId" />
					<Route element={<LoadingScreen />} path="/:companyId" />
					<Route element={< LoadingScreen1/>} path="/" />
					<Route element={<Preview />} path="/preview" />
					<Route element={<AdminLogin />} path="/adminlogin" />
					<Route path="/dashboard/*" element={<DashBoard />} />
					<Route path="/compatible-devices" element={<Compatibility />} />
					<Route path="/how_to_create" element={<HowToUse />} />
					<Route path="/designUpload" element={<DesignUpload/>} />
					<Route path="/partialDesignUpload" element={<PartialDesignUploadPage/>} />
					<Route path="/packages" element={<Packages/>} />
					<Route path="/partialPackage" element={<PartialPackage/>} />
					<Route path="/confirmation/:tmid" element={<PaymentConfirmation/>} />
					<Route path="/partialconfirmation/:tmid" element={<PartialConfirmation/>} />
					<Route path="/addresspage" element={<AddressPage/>} />
					<Route path="/productspage" element={<ProductsPage/>} />
					<Route path="/productscomponent" element={<ProductCompoent/>} />
					<Route path="/orderform" element={<OrderForm/>} />
					{/* DIGITAL CARD WEBSITE ROUTER END */}
					
      </Routes>
	  </HashRouter>
    </div>
  );
}

export default App;
