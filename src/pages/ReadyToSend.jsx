import { useState } from "react";

const ReadyToSend = () => {
  const [order, setOrder] = useState({
    orderId: "#001",
    dateCreated: "Jan 25, 2023",
    packed: true,
    weight: "5kg",
    dimensionalWeight: "5.2kg",
    totalValue: "R300",
    shippingAddress: {
      street: "18 Redcliff Close",
      postCode: "7441",
      country: "Zimbabwe",
      recipient: "Pete Mugasa",
      phoneNumber: "0746-888-479",
    },
    img: "https://placeimg.com/192/192/people",
  });

  return <h1>Hello from ReadyToSend</h1>;
};
export default ReadyToSend;
