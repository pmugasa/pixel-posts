import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFedex } from "@fortawesome/free-brands-svg-icons";

const ReadyToSend = ({ formData }) => {
  //address data
  const address = formData.addressData;
  const declaredItems = formData.customsData;
  const addons = formData.addonsData;

  //customs declaration object to be sent to Shippo
  const customsDeclaration = {
    contents_type: "MERCHANDISE",
    contents_explanation: "T-shirt",
    non_delivery_option: "RETURN",
    certify: true,
    certify_signer: "Pete Mugasa",
    items: declaredItems,
  };

  //parcel object to be sent to shippo
  //TODO data to come from the DB entered by the admin
  const parcel = {
    length: 5,
    width: 5,
    height: 5,
    distance_unit: "cm",
    weight: 2,
    mass_unit: "kg",
  };

  //address from object to be sent to shippo
  const addressFrom = {
    name: "Peterson Mugasa",
    company: "PixelPost",
    street1: "18 Redcliff Close",
    city: "Cape Town",
    state: "",
    zip: "7441",
    country: "ZA", // iso2 country code
    phone: "+27 7468888479",
    email: "pixexlpost@pixelpost.com",
  };
  //to be sent to shippo
  const shipment = {
    address_from: addressFrom,
    address_to: address,
    parcels: [parcel],
    customs_declaration: customsDeclaration,
    async: false,
  };

  const json = JSON.stringify(shipment);
  console.log("JSON DATA", json);
  console.log(customsDeclaration);
  console.log(address);
  console.log(declaredItems);
  console.log(addons);

  if (typeof address !== "undefined") {
    return (
      <>
        <div className="w-full p-4 flex justify-center items-center ">
          <div className="border-2 border-gray-400 shadow-sm rounded-md w-full h-fit mx-auto">
            <div className=" p-4 border-b-2 border-gray-200">
              <div className="flex">
                <h2 className="font-bold text-base">Order #4001</h2>
                <div className="badge badge-success ml-auto ">
                  <span className="font-bold">Shipping Soon</span>
                </div>
              </div>

              <h3 className="font-bold text-gray-500 mt-2">
                TRACKING NUMBER 175030116230104059
              </h3>
            </div>

            <div className="p-4 w-full">
              <h3 className="font-bold text-gray-500">DESTINATION</h3>
              <div className="mt-4">
                <p className="font-semibold text-gray-500">Peterson Mugasa</p>
                <p className="font-semibold text-gray-500">0123 456 789</p>
                <p className="font-semibold text-gray-500">18 Redcliff Close</p>
                <p className="font-semibold text-gray-500">Zimre Park</p>
                <p className="font-semibold text-gray-500">7441</p>
                <p className="font-semibold text-gray-500">Zimbabwe</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="p-4 w-full">
              <h3 className="font-bold text-gray-500">CARRIER</h3>
              <div className="mt-4">
                <p className="font-semibold text-gray-500">
                  <span className="mr-4">
                    <FontAwesomeIcon icon={faFedex} size="2xl" />
                  </span>
                  Fedex International Economy
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="w-full p-4 space-x-4">
              <button className="btn btn-sm btn-primary ">TRACK ORDER</button>
            </div>
          </div>
        </div>

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
                  <FontAwesomeIcon icon={faCircleQuestion} size="sm" />{" "}
                  Dimension Weight
                </a>
              </div>
            </div>

            <div className="divider"></div>
            <div className="w-full p-4">
              <h3 className="font-bold text-gray-500">DECLARED ITEMS</h3>

              {declaredItems.map((item, index) => {
                return (
                  <div
                    className="flex border-b-2 border-gray-200 mt-4"
                    key={index}
                  >
                    <p>{item.quantity}</p>
                    <p className="ml-4 text-gray-500">{item.description}</p>
                    <p className="ml-auto text-gray-500">{item.value_amount}</p>
                  </div>
                );
              })}
            </div>
            <div className="divider"></div>

            <div className="p-4 w-full">
              <h3 className="font-bold text-gray-500">DESTINATION</h3>
              <div className="mt-4">
                <p className="font-semibold text-gray-500">
                  {address.fullName}
                </p>
                <p className="font-semibold text-gray-500">
                  {address.phoneNumber}
                </p>
                <p className="font-semibold text-gray-500">{address.street1}</p>
                <p className="font-semibold text-gray-500">{address.city}</p>
                <p className="font-semibold text-gray-500">
                  {address.postalCode}
                </p>
                <p className="font-semibold text-gray-500">{address.country}</p>
              </div>
            </div>
            <div className="divider"></div>

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
  } else if (typeof address === "undefined") {
    return (
      <>
        <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
          <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
            <h3 className="font-bold text-center">
              You currently have no items Ready To Be Sent🫤
            </h3>
          </div>
        </div>
      </>
    );
  }
};
export default ReadyToSend;
