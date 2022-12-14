import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./comp/page/auth/LoginReg";
import Contact from "./comp/page/Contact";
import PageHome from "./comp/page/PageHome";
import PageLayout from "./comp/page/PageLayout";
import OrderHistory from "./comp/page/OrderHistory";
import Order from "./comp/page/Order"
import Review from "./comp/page/Review";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<PageHome />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="order" element={<Order />}/>
          <Route path="orderhistory" element={<OrderHistory />}/>
          <Route path="review" element={<Review />}/>
          <Route path="loginreg" element={<LoginReg />}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
