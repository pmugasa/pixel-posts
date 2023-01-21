import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import InReview from "./pages/InReview";
import Login from "./pages/InReview";
import ReadyToSend from "./pages/ReadyToSend";
import Received from "./pages/Received";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import ShippingRates from "./pages/ShippingRates";
import NoPage from "./pages/NoPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="in-review" element={<InReview />} />
          <Route path="login" element={<Login />} />
          <Route path="ready-to-send" element={<ReadyToSend />} />
          <Route path="received" element={<Received />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="shipping-rates" element={<ShippingRates />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
