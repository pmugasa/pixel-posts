const Received = (props) => {
  const handleClick = (parcel, event) => {
    props.setReceivedParcels(
      props.receivedParcels.filter((i) => i.shipmentId !== parcel.shipmentId)
    );
    props.setPackedItems([...props.packedItems, parcel]);
  };

  return (
    <>
      {props.receivedParcels.map((parcel) => {
        return (
          <div key={parcel.shipmentId}>
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
                        {parcel.weight}
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
};
export default Received;
