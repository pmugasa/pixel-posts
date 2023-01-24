import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const NewParcel = ({
  setPackedItems,
  packedItems,
  setReceivedParcels,
  receivedParcels,
}) => {
  const handleDelete = (parcel) => {
    setPackedItems(
      packedItems.filter((item) => item.shipmentId !== parcel.shipmentId)
    );
    setReceivedParcels([...receivedParcels, parcel]);
  };
  console.log(receivedParcels);

  return (
    <>
      <div className="w-screen mt-4 px-4">
        <div className="border-2 border-gray-200 w-full h-screen mx-auto">
          <h2 className="text-lg font-bold text-center">Parcel 1</h2>
          {packedItems.map((parcel, i) => {
            return (
              <div key={parcel.shipmentId}>
                <div>
                  <div className="flex flex-col w-full px-2">
                    <div className="border-2 border-gray-200 rounded-lg  w-full h-28 mx-auto mt-8 p-2 flex flex-col">
                      <div className="flex justify-start items-start">
                        <div className="avatar my-auto flex-none">
                          <div className="w-20 rounded">
                            <img src={packedItems[i].img} alt="parcel" />
                          </div>
                        </div>

                        <div className="mx-4  flex-none w-40 ">
                          <p className="text-base font-bold">
                            Shipment: {packedItems[i].shipmentId}
                          </p>
                          <div className="space-x-2 ">
                            <p className="badge badge-ghost badge-sm">
                              {packedItems[i].weight} kg
                            </p>
                            <p className="badge badge-ghost badge-sm">
                              {packedItems[i].date}
                            </p>
                            <p className="badge badge-ghost badge-sm block mt-2 ">
                              {packedItems[i].trackingId}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto mt-auto">
                          <button className="btn btn-sm">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => handleDelete(parcel)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewParcel;
