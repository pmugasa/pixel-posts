import { useState } from "react";

const AdditionalServicesForm = () => {
  const [itemPhotos, setItemPhotos] = useState(false);
  const [deviceTesting, setDeviceTesting] = useState(false);
  const [doubleWalledBox, setDoubleWalledBox] = useState(false);
  const [bubbleWrap, setBubbleWrap] = useState(false);

  const handleItemPhotos = (e) => {
    if (e.target.checked) {
      console.log("CHECKED ITEM PHOTOS", itemPhotos);
    } else {
      console.log("ITEM PHOTOS NOT CHECKED");
    }
    setItemPhotos((current) => !current);
  };
  const handleDeviceTesting = (e) => {
    if (e.target.checked) {
      console.log("CHECKED DEVICE TESTING", deviceTesting);
    } else {
      console.log("DEVICE TESTING IS NOT CHECKED");
    }
    setDeviceTesting((current) => !current);
  };
  const handleBubbleWrap = (e) => {
    if (e.target.checked) {
      console.log(" BUBBLE WRAP IS CHECKED", bubbleWrap);
    } else {
      console.log("BUBBLE WRAP IS NOT CHECKED");
    }
    setBubbleWrap((current) => !current);
  };

  const handleDoubleWalledBox = (e) => {
    if (e.target.checked) {
      console.log("DOUBLE WALL BOX IS CHECKED", doubleWalledBox);
    } else {
      console.log("DOUBLE WALL BOX IS NOT CHECKED");
    }
    setDoubleWalledBox((current) => !current);
  };

  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            ADDITIONAL SERVICES
          </h3>
        </div>
        <div className="divider"></div>
        <form method="post">
          <div className="form-control">
            <div>
              <label className="label cursor-pointer">
                <span className="label-text">
                  Item photos
                  <span className="badge badge-primary ml-2 badge-sm">R50</span>
                </span>

                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  name="itemPhotos"
                  value="50"
                  onChange={handleItemPhotos}
                />
              </label>
            </div>

            <div>
              <label className="label cursor-pointer">
                <span className="label-text">
                  Device testing
                  <span className="badge badge-primary ml-2 badge-sm">
                    R100
                  </span>
                </span>

                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  name="itemPhotos"
                  value="50"
                  onChange={handleDeviceTesting}
                />
              </label>
            </div>

            <div>
              <label className="label cursor-pointer">
                <span className="label-text">
                  Bubble wrap all items
                  <span className="badge badge-primary ml-2 badge-sm">R85</span>
                </span>

                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  name="itemPhotos"
                  value="50"
                  onChange={handleBubbleWrap}
                />
              </label>
            </div>

            <div>
              <label className="label cursor-pointer">
                <span className="label-text">
                  Double walled box
                  <span className="badge badge-primary ml-2 badge-sm">R70</span>
                </span>

                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  name="itemPhotos"
                  value="50"
                  onChange={handleDoubleWalledBox}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdditionalServicesForm;
