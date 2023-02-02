const AddonsForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            ADDONS
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
                value={formData.addons.itemPhotos}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addons: {
                      ...formData.addons,
                      addons: e.target.checked,
                    },
                  })
                }
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
                value={formData.addons.deviceTesting}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addons: {
                      ...formData.addons,
                      deviceTesting: e.target.checked,
                    },
                  })
                }
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
                value={false}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addons: {
                      ...formData.addons,
                      bubbleWrap: e.target.checked,
                    },
                  })
                }
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
                value={false}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addons: {
                      ...formData.addons,
                      doubleWalledBox: e.target.checked,
                    },
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddonsForm;
