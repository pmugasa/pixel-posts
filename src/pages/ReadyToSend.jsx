import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

const ReadyToSend = () => {
  const [order, setOrder] = useState({
    parcelId: "#001",
    dateCreated: "Jan 25, 2023",
    packed: true,
    shipped: false,
    readyForPayment: false,
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

  return (
    <>
      <div className="w-full p-4 flex justify-center items-center ">
        <div className="border-2 border-gray-400 shadow-sm rounded-md w-full h-fit mx-auto">
          <div className="flex p-4 border-b-2 border-gray-200">
            <h2 className="font-bold text-base">Parcel #001</h2>
            <div className="badge badge-info ml-auto ">
              <span className="font-bold">Ready for Payment</span>
            </div>
          </div>

          <div className="w-full flex justify-start items-center p-4 space-x-8 ">
            <div className="avatar ">
              <div className="w-32 rounded">
                <img src="https://placeimg.com/192/192/people" alt="parcel" />
              </div>
            </div>

            <div className="">
              <p className="font-bold">
                Total Weight <span className="font-light">5.1kg</span>
              </p>
              <p className="font-bold">
                Dimensional Weight <span className="font-light">12.2kg</span>
              </p>

              <a
                href="https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html"
                target="_blank"
                rel="noreferrer"
                className="link link-hover link-primary"
              >
                <FontAwesomeIcon icon={faCircleQuestion} size="sm" /> Dimension
                Weight
              </a>
            </div>
          </div>

          <div className="divider"></div>
          <div className="w-full p-4">
            <h3 className="font-bold text-gray-500">DECLARED GOODS</h3>

            <div className="flex border-b-2 border-gray-200 mt-4">
              <p>1</p>
              <p className="ml-4 text-gray-500">Running shoes</p>
              <p className="ml-auto text-gray-500">1, 000.00</p>
            </div>
            <div className="flex border-b-2 border-gray-200">
              <p>1</p>
              <p className="ml-4 text-gray-500">iPhone 14 Pro</p>
              <p className="ml-auto text-gray-500">13, 000.00</p>
            </div>
            <div className="flex border-b-2 border-gray-200">
              <p>1</p>
              <p className="ml-4 text-gray-500">Blue hoodie</p>
              <p className="ml-auto text-gray-500"> 200.00</p>
            </div>

            <div className="flex mt-2 ">
              <p className="font-bold">Total Declared Value</p>
              <p className="font-bold ml-auto">R 4, 000.00</p>
            </div>
          </div>

          <div className="w-full p-4 space-x-4">
            <button className="btn btn-sm btn-primary ">Make payment</button>
            <button className="btn btn-sm btn-outline btn-ghost ">
              Edit Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReadyToSend;
