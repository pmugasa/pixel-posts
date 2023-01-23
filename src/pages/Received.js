const Received = () => {
  const parcels = [
    {
      shipmentId: "#001",
      date: "Jan 23, 2023",
      weight: "0.5kg",
      img: "Takealot",
      trackingId: " EV938507560CN",
    },
    {
      shipmentId: "#002",
      date: "Jan 23, 2023",
      weight: "0.8kg",
      img: "Mr Price",
      trackingId: "175030116230104059",
    },
    {
      shipmentId: "#003",
      date: "Jan 23, 2023",
      weight: "1.0kg",
      img: "H&M",
      trackingId: "9505511597628205266397",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-screen px-2">
        <div className="border-2 border-gray-200 rounded-lg  w-full h-28 mx-auto mt-8 p-2 flex flex-col">
          <div className="flex justify-center items-start">
            <div className="avatar my-auto">
              <div className="w-20 rounded">
                <img src="https://placeimg.com/192/192/people" alt="parcel" />
              </div>
            </div>

            <div className="mx-4 ">
              <p className="text-base font-bold">Shipment ID: #001</p>
              <div className="space-x-1">
                <p className="badge badge-ghost badge-sm">0.5kg</p>
                <p className="badge badge-ghost badge-sm">Jan 23, 2023</p>
                <p className="badge badge-ghost badge-sm">EV938507560CN</p>
              </div>
            </div>

            <button className="btn btn-sm  mt-auto">PACK</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Received;
