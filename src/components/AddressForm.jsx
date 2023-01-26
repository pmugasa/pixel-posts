const AddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const deliveryAddress = Object.fromEntries(formData.entries());
    console.log(deliveryAddress);
  };

  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            DELIVERY ADDRESS
          </h3>
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div></div>

          <div className="form-control">
            <div className="divider"></div>

            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="street1"
                placeholder="Street Address 1"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="street2"
                placeholder="Street Address 2"
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="country"
                inputMode="numeric"
                placeholder="Country"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phone"
                inputMode="numeric"
                placeholder="Phone Number"
                required
                className="input input-bordered input-sm w-full "
              />
            </div>
          </div>

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

export default AddressForm;
