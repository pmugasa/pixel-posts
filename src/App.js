import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config.js";

const App = () => {
  const [receivedParcels, setReceivedParcels] = useState([]);

  useEffect(() => {
    const getReceivedParcels = async () => {
      const data = await getDocs(collection(db, "Received Parcels"));

      const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const updatedData = newData.map((obj) => {
        obj.date = obj.date.toDate().toDateString();
        return obj;
      });
      setReceivedParcels(updatedData);
    };

    getReceivedParcels();
  }, []);

  const [packedItems, setPackedItems] = useState([]);
  const authenticated = true;
  if (authenticated) {
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
  }

  return (
    <>
      <Login />
    </>
  );
};
export default App;
