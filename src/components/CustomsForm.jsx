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
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <select
              name="batteries"
              className="select select-accent w-full max-w-xs"
            >
              <option disabled>Any lithium batteries?</option>
              <option>Yes, packed with item</option>
              <option>Yes, fitted inside item</option>
              <option>No</option>
            </select>

            <label className="label">
              <span className="label-text">Item description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="e.g running shoes"
              required
              className="input input-bordered input-sm w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Item value</span>
            </label>
            <input
              type="text"
              name="itemValue"
              inputMode="numeric"
              placeholder="R1 000.00"
              required
              className="input input-bordered input-sm w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              inputMode="numeric"
              placeholder="1"
              required
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn btn-sm">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomsForm;
