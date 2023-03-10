const Received = ({
  setPackedItems,
  setReceivedParcels,
  receivedParcels,
  packedItems,
}) => {
  const handleClick = (parcel) => {
    setReceivedParcels(
      receivedParcels.filter((i) => i.shipmentId !== parcel.shipmentId)
    );
    setPackedItems([...packedItems, parcel]);
  };
  if (receivedParcels.length > 0) {
    return (
      <>
        {receivedParcels.map((parcel) => {
          return (
            <div key={parcel.id}>
              <div className="flex flex-col w-screen px-2">
                <div className="border-2 border-gray-200 rounded-lg  w-full h-28 mx-auto mt-8 p-2 flex flex-col">
                  <div className="flex justify-start items-start">
                    <div className="avatar my-auto flex-none">
                      <div className="w-20 rounded">
                        <img src={parcel.img} alt="parcel" />
                      </div>
                    </div>

                    <div className="mx-4  flex-none w-40 ">
                      <p className="text-base font-bold">
                        Shipment: {parcel.shipmentId}
                      </p>
                      <div className="space-x-2 ">
                        <p className="badge badge-ghost badge-sm">
                          {parcel.weight}kg
                        </p>
                        <p className="badge badge-ghost badge-sm">
                          {parcel.date}
                        </p>
                        <p className="badge badge-ghost badge-sm block mt-2 ">
                          {parcel.trackingId}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto mt-auto">
                      <button
                        className="btn btn-sm"
                        onClick={() => handleClick(parcel)}
                      >
                        ADD TO PARCEL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3 className="font-bold text-center">
            You currently have no items in Recieved????
          </h3>
        </div>
      </div>
    </>
  );
};
export default Received;
