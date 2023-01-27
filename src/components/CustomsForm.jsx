import { useState } from "react";

const CustomsForm = () => {
  const [formValues, setFormValues] = useState([
    {
      description: "",
      quantity: "",
      net_weight: "",
      mass_unit: "kg",
      value_amount: "",
      value_currency: "ZAR",
      origin_country: "RSA",
    },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        description: "",
        quantity: "",
        net_weight: "",
        mass_unit: "kg",
        value_amount: "",
        value_currency: "ZAR",
        origin_country: "RSA",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const customsItem = JSON.stringify(formValues);

    console.log(customsItem);
  };

  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-center text-gray-500 text-lg font-bold">
            CUSTOMS DECLARATION FORM
          </h3>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div></div>
          {formValues.map((element, index) => (
            <div className="form-control" key={index}>
              <div className="divider"></div>
              <label className="label">
                <span className="label-text">Any li-ion batteries?</span>
              </label>
              <select
                className="select select-bordered"
                name="batteries"
                value={element.batteries}
                onChange={(e) => handleChange(index, e)}
              >
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
                  value={element.description}
                  onChange={(e) => handleChange(index, e)}
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
                    name="value_amount"
                    value={element.value_amount}
                    onChange={(e) => handleChange(index, e)}
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
                    value={element.quantity}
                    onChange={(e) => handleChange(index, e)}
                    inputMode="numeric"
                    placeholder="1"
                    required
                    className="input input-bordered input-sm w-full "
                  />
                </div>

                <div className="">
                  <label className="label">
                    <span className="label-text">Weight (kg)</span>
                  </label>
                  <input
                    type="text"
                    name="net_weight"
                    value={element.net_weight}
                    onChange={(e) => handleChange(index, e)}
                    inputMode="numeric"
                    placeholder="1"
                    required
                    className="input input-bordered input-sm w-full "
                  />
                </div>
              </div>

              {index ? (
                <div className="mt-4 ml-auto relative top-10">
                  <button
                    className="btn btn-xs btn-error"
                    type="button"
                    onClick={() => removeFormFields(index)}
                  >
                    Remove
                  </button>
                </div>
              ) : null}
            </div>
          ))}

          <button
            type="button"
            className="btn btn-xs mt-4"
            onClick={() => addFormFields()}
          >
            Add Item
          </button>
          <div className="divider"></div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-sm btn-block btn-primary mt-12"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomsForm;
