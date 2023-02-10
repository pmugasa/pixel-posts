import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "./Auth/Profile";
import Home from "../pages/Home";
import NewParcel from "../pages/Parcel/NewParcel";
import ShippingRates from "../pages/ShippingRates";
import ReadyToSend from "../pages/Parcel/ReadyToSend";
import Received from "../pages/Parcel/Received";
import Settings from "../pages/Auth/Settings";
import NoPage from "../pages/NoPage";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config.js";

const Dashboard = ({ handleLogout }) => {
  const [receivedParcels, setReceivedParcels] = useState([]);
  //form data address, addons, customs
  const [rtsData, setRtsData] = useState({});
  //fetching received parcels from the DB
  useEffect(() => {
    const getReceivedParcels = async () => {
      const data = await getDocs(collection(db, "Received Parcels"));

      const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      //modifying date object to js date
      const updatedData = newData.map((obj) => {
        obj.date = obj.date.toDate().toDateString();
        return obj;
      });
      setReceivedParcels(updatedData);
    };

    getReceivedParcels();
  }, []);

  const [packedItems, setPackedItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          packedItems={packedItems}
          receivedParcels={receivedParcels}
          handleLogout={handleLogout}
        />
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
                setRtsData={setRtsData}
              />
            }
          />

          <Route
            path="ready-to-send"
            element={<ReadyToSend rtsData={rtsData} />}
          />
          <Route
            path="received-parcels"
            element={
              <Received
                packedItems={packedItems}
                setPackedItems={setPackedItems}
                receivedParcels={receivedParcels}
                setReceivedParcels={setReceivedParcels}
              />
            }
          />

          <Route path="settings" element={<Settings />} />
          <Route path="shipping-rates" element={<ShippingRates />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
