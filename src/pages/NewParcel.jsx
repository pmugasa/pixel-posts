import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import CustomsForm from "../components/CustomsForm";
import AddressForm from "../components/AddressForm";
import AdditionalServicesForm from "../components/AdditionalServicesForm";

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
  if (packedItems.length > 0) {
    return (
      <>
        <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
          <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
            <h2 className="text-lg font-bold text-center">
              Total weight - {totalWeight(packedItems, "weight")} kgs
            </h2>
            <div className="divider"></div>
            {packedItems.map((parcel, i) => {
              return (
                <div key={parcel.id}>
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

            <CustomsForm />
            <AddressForm />
            <AdditionalServicesForm />
            <div className="flex mt-4 w-full">
              <button className="btn btn-sm ml-auto w-full btn-success">
                Request packing
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3 className="font-bold text-center">
            You currently have no items in your Parcel🫤
          </h3>
        </div>
      </div>
    </>
  );
};

export default NewParcel;
