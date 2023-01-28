import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFedex } from "@fortawesome/free-brands-svg-icons";
const ReadyToSend = () => {
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
          <div className="divider"></div>

          <div className="p-4 w-full">
            <h3 className="font-bold text-gray-500">DESTINATION</h3>
            <div className="mt-4">
              <p className="font-semibold text-gray-500">18 Redcliff Close</p>
              <p className="font-semibold text-gray-500">Zimre Park</p>
              <p className="font-semibold text-gray-500">7441</p>
              <p className="font-semibold text-gray-500">Zimbabwe</p>
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

      <div className="w-full p-4 flex justify-center items-center ">
        <div className="border-2 border-gray-400 shadow-sm rounded-md w-full h-fit mx-auto">
          <div className="flex p-4 border-b-2 border-gray-200">
            <h2 className="font-bold text-base">Parcel #002</h2>
            <div className="badge badge-ghost ml-auto ">
              <span className="font-bold">Being Packed</span>
            </div>
          </div>

          <div className="w-full p-4">
            <h3 className="font-bold text-gray-500">SHIPMENTS</h3>

            <div className="  mt-4">
              <p className=" text-gray-500">Shipment #001</p>
              <p className=" text-gray-500">Shipment #002</p>
              <p className=" text-gray-500">Shipment #003</p>
            </div>
          </div>
          <div className="divider"></div>

          <div className="p-4 w-full">
            <h3 className="font-bold text-gray-500">
              ADDITIONAL SERVICES REQUESTED
            </h3>
            <div className="mt-4">
              <ul>
                <li className="font-semibold text-gray-500">Remove invoices</li>
                <li className="font-semibold text-gray-500">
                  Add extra bubble wrap
                </li>
                <li className="font-semibold text-gray-500">
                  Keep original boxes
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>

          <div className="w-full p-4 space-x-4">
            <button className="btn btn-sm btn-primary " disabled>
              Make payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReadyToSend;
