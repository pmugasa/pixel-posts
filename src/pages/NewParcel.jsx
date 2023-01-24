import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NewParcel = ({
  setPackedItems,
  packedItems,
  setReceivedParcels,
  receivedParcels,
}) => {
  const handleDelete = (parcel) => {
    setReceivedParcels([...receivedParcels, parcel]);
    setPackedItems(
      packedItems.filter((item) => item.shipmentId !== parcel.shipmentId)
    );
  };

  const totalWeight = (packedItems, weight) => {
    let total = 0;
    for (let obj of packedItems) {
      total += obj[weight];
    }
    return total;
  };

  console.log(totalWeight(packedItems, "weight"));
  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h2 className="text-lg font-bold text-center">
            You have {packedItems.length} item/s in your Pixel Box
          </h2>
          <div className="divider"></div>
          {packedItems.map((parcel, i) => {
            return (
              <div key={parcel.shipmentId}>
                <div>
                  <div className="flex flex-col w-full px-2">
                    <div className=" w-full h-10 mx-auto  p-2 ">
                      <div className="flex justify-start items-start">
                        <div className="avatar  flex-none">
                          <div className="w-8 rounded">
                            <img src={packedItems[i].img} alt="parcel" />
                          </div>
                        </div>

                        <div className="mx-4  my-auto w-44 flex space-x-2 ">
                          <p className="text-base font-semibold">
                            Shipment: {packedItems[i].shipmentId}
                          </p>
                          <div className="space-x-2 ">
                            <p className="badge badge-ghost badge-sm">
                              {packedItems[i].weight} kg
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto ">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            size="sm"
                            onClick={() => handleDelete(parcel)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            );
          })}
          <div className="flex">
            <Link
              to="/customs-declaration"
              className="link link-hover link-neutral"
            >
              Fill in customs declaration form
            </Link>
            <button className="btn btn-sm ml-auto">Pack</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewParcel;
