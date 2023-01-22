import { useState } from "react";

const Received = () => {
  const [formData, setFormData] = useState([]);
  const [inputData, setInputData] = useState({
    batteries: "",
    value: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newData = { ...inputData };
    setFormData([...formData, newData]);
    setInputData({
      batteriesInfo: "",
      value: "",
      quantity: "",
      description: "",
    });

    formData.map((data, index) => {
      console.log(data);
    });
  };
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Takealot</h2>

          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">
              open modal
            </label>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Customs declaration</h3>
          <form method="POST" onSubmit={handleFormSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Does it contain lithium ion batteries? *
                </span>
              </label>
              <select
                name="batteries"
                value={inputData.batteries}
                className="select select-bordered"
                onChange={handleChange}
              >
                <option disabled value>
                  Pick one
                </option>
                <option value="Yes, packed with item">
                  Yes, packed with item
                </option>
                <option value="Yes, fitted inside item">
                  Yes, fitted inside item
                </option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="divider"></div>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Value *</span>
                </label>
                <label className="input-group w-full max-w-xs">
                  <input
                    type="text"
                    name="value"
                    value={inputData.value}
                    inputMode="numeric"
                    placeholder="0.01"
                    className="input input-bordered w-full max-w-xs"
                    required
                    onChange={handleChange}
                  />
                  <span>ZAR</span>
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity *</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={inputData.quantity}
                  inputMode="numeric"
                  placeholder="1"
                  className="input input-bordered w-full max-w-xs"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Item description *</span>
                </label>
                <input
                  type="text"
                  name="description"
                  value={inputData.description}
                  placeholder="e.g running shoes"
                  className="input input-bordered w-full max-w-xs"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn mt-8"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
          <div className="divider"></div>
          <div>
            {formData.map((data, index) => (
              <div key={index}>
                <p>Item{index + 1}</p>
                <p>Batteries: {data.batteries}</p>
                <p>Value: {data.value}</p>
                <p>Quantity: {data.quantity}</p>
                <p>Description: {data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Received;
