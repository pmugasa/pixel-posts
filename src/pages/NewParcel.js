import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NewParcel = () => {
  const [myParcel, setMyParcel] = useState([
    {
      shipmentId: "#004",
      date: "Jan 23, 2023",
      weight: "0.5kg",
      img: "https://placeimg.com/192/192/people",
      trackingId: " EV938507560CN",
    },
  ]);

  const handleDelete = (parcel) => {
    setMyParcel(
      myParcel.filter((item) => item.shipmentId !== parcel.shipmentId)
    );
    console.log(parcel);
  };

  return (
    <>
      <div className="w-screen mt-4 px-4">
        <div className="border-2 border-gray-200 w-full h-screen mx-auto">
          <h2 className="text-lg font-bold text-center">Parcel 1</h2>
          {myParcel.map((parcel, i) => {
            return (
              <div key={parcel.shipmentId}>
                <div>
                  <div className="flex flex-col w-full px-2">
                    <div className="border-2 border-gray-200 rounded-lg  w-full h-28 mx-auto mt-8 p-2 flex flex-col">
                      <div className="flex justify-start items-start">
                        <div className="avatar my-auto flex-none">
                          <div className="w-20 rounded">
                            <img src={myParcel[i].img} alt="parcel" />
                          </div>
                        </div>

                        <div className="mx-4  flex-none w-40 ">
                          <p className="text-base font-bold">
                            Shipment: {myParcel[i].shipmentId}
                          </p>
                          <div className="space-x-2 ">
                            <p className="badge badge-ghost badge-sm">
                              {myParcel[i].weight}
                            </p>
                            <p className="badge badge-ghost badge-sm">
                              {myParcel[i].date}
                            </p>
                            <p className="badge badge-ghost badge-sm block mt-2 ">
                              {myParcel[i].trackingId}
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
