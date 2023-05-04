// import logo from './logo.svg';
import './App.css';
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Footer } from './component/Footer';
import { UserLogin } from './component/UserLogin';
import { UserRegi } from './component/UserRegi';
import { Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './component/AdminDashboard';
import { UserDashboard } from './component/UserDashboard';
import { VendorDashboard } from './component/VendorDashboard';
import { Shop } from './component/Shop';
import { Aboutus } from './component/AboutUs';
import { Services } from './component/Services';
import { Blog } from './component/Blog';
import { Contactus } from './component/ContactUs';
import { Cart } from './component/Cart';
import { Checkout } from './component/Checkout';
import { VendorData } from './component/VendorData';
import { VenPro } from './component/VenPro';
import { useState } from 'react';


function App() {
  const [productId,setProductId] = useState();
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop setId={setProductId}/>} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/UserRegi' element={<UserRegi />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/UserDashboard' element={<UserDashboard/>} />
        <Route path='/VendorDashboard' element={<VendorDashboard/>} />
        <Route path='/VendorData' element={<VendorData/>} />
        <Route path='/Vendorpro' element={<VenPro/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;