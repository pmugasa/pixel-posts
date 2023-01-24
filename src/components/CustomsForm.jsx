const CustomsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData);

    console.log(formJson);
  };

  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-start text-lg font-semibold font-sans">
            Customs Declaration Form
          </h3>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Any li-ion batteries?</span>
            </label>
            <select className="select select-bordered">
              <option disabled defaultValue="No">
                Pick one
              </option>
              <option value="No">No</option>
              <option value="Yes, fitted inside item">
                Yes, fitted inside item
              </option>
              <option value="Yes, packed with item">
                Yes, packed with item
              </option>
            </select>

            <div>
              <label className="label">
                <span className="label-text">Item description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="e.g running shoes"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="">
              <div className="">
                <label className="label">
                  <span className="label-text">Item value</span>
                </label>
                <input
                  type="text"
                  name="itemValue"
                  inputMode="numeric"
                  placeholder="R1 000.00"
                  required
                  className="input input-bordered input-sm w-full "
                />
              </div>

              <div className="">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  inputMode="numeric"
                  placeholder="1"
                  required
                  className="input input-bordered input-sm w-full "
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-sm mt-4">
            Submit
          </button>
        </form>
      </div>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6 h-40">
        <div className="space-x-6 flex justify-center items-center">
          <span className="text-base font-semibold">
            Description Hello World
          </span>
          <span>Quantity</span>
          <span>Value</span>
        </div>
      </div>
    </>
  );
};

export default CustomsForm;
