import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
const CustomsForm = () => {
  const [formValues, setFormValues] = useState([
    {
      description: "",
      quantity: "",
      value: "",
      batteries: "",
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
        value: "",
        batteries: "",
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

    const formData = JSON.stringify(formValues);
    console.log(formData);
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
                    name="itemValue"
                    value={element.inputValue}
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
              </div>

              {index ? (
                <div className="mt-4 ml-auto relative top-12">
                  <button
                    className="btn btn-sm"
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
            className="btn btn-sm mt-4"
            onClick={() => addFormFields()}
          >
            Add Item
          </button>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-sm btn-block btn-primary mt-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6 h-40">
        <div className="space-x-6 flex justify-center items-center">
          <span className="text-base font-semibold ">
            Description Hello World
          </span>
          <span>Quantity </span>
          <span>Value</span>
        </div>
      </div>
    </>
  );
};

export default CustomsForm;
