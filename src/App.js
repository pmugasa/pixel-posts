import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NewParcel from "./pages/NewParcel";
import Login from "./pages/Login";
import ReadyToSend from "./pages/ReadyToSend";
import Received from "./pages/Received";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import ShippingRates from "./pages/ShippingRates";
import NoPage from "./pages/NoPage";
import Customs from "./pages/Customs";

const App = () => {
  const [receivedParcels, setReceivedParcels] = useState([
    {
      shipmentId: "#001",
      date: "Jan 23, 2023",
      weight: 0.5,
      img: "https://placeimg.com/192/192/people",
      trackingId: " EV938507560CN",
    },
    {
      shipmentId: "#003",
      date: "Jan 23, 2023",
      weight: 1.0,
      img: "https://placeimg.com/192/192/people",
      trackingId: "9505511597628205266397",
    },
    {
      shipmentId: "#002",
      date: "Jan 23, 2023",
      weight: 0.8,
      img: "https://placeimg.com/192/192/people",
      trackingId: "175030116230104059",
    },
  ]);
  const [packedItems, setPackedItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar packedItems={packedItems} receivedParcels={receivedParcels} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="new-parcel"
          element={
            <NewParcel
              packedItems={packedItems}
              setPackedItems={setPackedItems}
              receivedParcels={receivedParcels}
              setReceivedParcels={setReceivedParcels}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="ready-to-send" element={<ReadyToSend />} />
        <Route
          path="received"
          element={
            <Received
              packedItems={packedItems}
              setPackedItems={setPackedItems}
              receivedParcels={receivedParcels}
              setReceivedParcels={setReceivedParcels}
            />
          }
        />
        <Route path="customs-declaration" element={<Customs />} />
        <Route path="settings" element={<Settings />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="shipping-rates" element={<ShippingRates />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
