import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import {Header} from './components/Header/Header';
import { NftExperience } from './components/NftExperience/NftExperience';
import { LatestItem } from './components/LatestItem/LatestItem';
import { LandingPageSection3 } from './components/LandingPage_Section_3/LandingPageSection3';
import { LandingPageSection4 } from "./components/LandingPageSection4/LandingPageSection4";
import { LandingPageSection5 } from "./components/LandingPageSection5/LandingPageSection5";
import  {AuctionList} from './components/AuctionList/AuctionList';
import { LandingPageSection6 } from './components/LandingPageSection6/LandingPageSection6';
import { Footer } from './components/Footer/Footer';
import { Explore } from './components/Explore/Explore';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import {Authors} from './components/Authors/Authors';
import { AuthorsProfile } from './components/Authors/AuthorsProfile';
import {Login} from './components/Login/Login';
import {Contact} from './components/Login/Contact';
import {Activity} from './components/Activity/Activity';
import {Blog} from './components/Blog/Blog';
import {Create} from './components/Create/Create';
import { Card } from './components/PaymentMenthod/Card';
import { AuctionDetail } from './components/AuctionList/AuctionDetail';
import { Introduction } from './components/Introduction/Introduction';
import MakePayment from './components/PaymentMenthod/MakePayment';
import { PaymentMethodCard } from './components/PaymentMenthod/PaymentMethodCard';
import { PaymentSuccess } from './components/PaymentMenthod/PaymentSuccess';
import { useNavigate } from 'react-router-dom';
import { BlogDetails } from './components/Blog/BlogDetails';
import { Dashboard } from './components/UserDashBoard/Dashboard';
import {Notification} from './components/Notification';
import { MenuLeft } from './components/UserDashBoard/MenuLeft';
import { Inventory } from './components/UserDashBoard/Inventory';

function App() {
  

  return (
    <>
    {/* <Header /> */}
    <Routes>
        <Route path="/" element={
          <>
            <NftExperience />
            <LatestItem />
            <LandingPageSection3/>
            <LandingPageSection4 />
            <LandingPageSection5 />
            <AuctionList />
            <LandingPageSection6 /> 
            {/* <Authors /> */}
            {/* <AuthorsProfile /> */}
            {/* <Activity /> */}
            {/* <Blog /> */}
            {/* <Create /> */}
            {/* <Card /> */}
            {/* <MakePayment /> */}
            {/* <PaymentMethodCard /> */}
            {/* <PaymentSuccess /> */}
            
          </>
        } />
        <Route path="marketplace" element={<> 
         <Header />
        <Explore /></>} />
        <Route path="introduction" element={<> <Header /><Introduction /></>} />
        <Route path="auction" element={<> <Header /><AuctionDetail /></>} />
        <Route path="detail" element={<> <Header /><ItemDetail /></>} />
        <Route path="create" element={<> <Header /> <Create /></>} />
        <Route path="cart" element={<> <Header /> <Card /></>} />
        <Route path="author-profile" element={<> <Header /> <Dashboard /> </>} />
        <Route path="author" element={<>  <Header /><Authors /></>} />
        <Route path="activity" element={<>  <Header /><Activity /></>} />
        <Route path="blog" element={<>  <Header /><Blog /></>} />
        <Route path="blog-details" element={<>  <Header /><BlogDetails /></>} />
        <Route path="login" element={<> <Header /><Contact /></>} />
        <Route path="login-acount" element={<> <Header /><Login /></>} />
        <Route path="notification" element={<> <Header /><Notification /> </>} />
        {/* <Route path="inventory" element={ <>
         <div className="row">
          <div className="col-md-3 col-sm-12 col-lg-3 dashborad-main"><MenuLeft /></div>
          <div className='col-md-9 col-sm-12 col-lg-9 '> <Inventory /> </div>
          </div> </>} /> */}
      </Routes>
      <Footer />
   
     
      <ScrollToTop smooth color="#6f00ff" />
      
    </>
  );
}

export default App;

//ARSlan