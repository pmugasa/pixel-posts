import { useState } from "react";

const AdditionalServicesForm = ({ handleChildData }) => {
  const [addons, setAddons] = useState({
    itemPhotos: false,
    deviceTesting: false,
    doubleWalledBox: false,
    bubbleWrap: false,
  });

  const handleItemPhotos = (e) => {
    if (e.target.checked) {
      setAddons({
        ...addons,
        itemPhotos: e.target.checked,
      });
    } else {
      return;
    }
  };
  const handleDeviceTesting = (e) => {
    if (e.target.checked) {
      setAddons({
        ...addons,
        deviceTesting: e.target.checked,
      });
    } else {
      return;
    }
  };

  const handleDoubleWalledBox = (e) => {
    if (e.target.checked) {
      setAddons({
        ...addons,
        doubleWalledBox: e.target.checked,
      });
    } else {
      return;
    }
  };

  const handleBubbleWrap = (e) => {
    if (e.target.checked) {
      setAddons({
        ...addons,
        bubbleWrap: e.target.checked,
      });
    } else {
      return;
    }
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

        <div className="">
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
                value={addons.itemPhotos}
                onChange={handleItemPhotos}
              />
            </label>
          </div>

          <div>
            <label className="label cursor-pointer">
              <span className="label-text">
                Device testing
                <span className="badge badge-primary ml-2 badge-sm">R100</span>
              </span>

              <input
                type="checkbox"
                className="toggle toggle-primary"
                name="itemPhotos"
                value={addons.deviceTesting}
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
                value={addons.bubbleWrap}
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
                value={addons.doubleWalledBox}
                onChange={handleDoubleWalledBox}
              />
            </label>
          </div>

          <div>
            <button
              className="btn btn-xs btn-success"
              type="button"
              onClick={() => handleChildData({ addonsData: addons })}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalServicesForm;
