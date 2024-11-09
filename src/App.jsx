//import './App.css';
import { Route,Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddToCartPage from "./Pages/AddToCartPage";
import PaymentPage from "./Pages/PaymentPage";
import ProfilePage from "./Pages/ProfilePage";
import PShopPage from "./Pages/PShopPage";

function App() {
   

  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/addtocart" element={<AddToCartPage/>}/>
    <Route path="/paymentpage" element={<PaymentPage/>}/>
    <Route path="/profilepage" element={<ProfilePage/>}/>
    <Route path="/pshoppage" element={<PShopPage/>}/>
      
    </Routes>
  )
}

export default App;
