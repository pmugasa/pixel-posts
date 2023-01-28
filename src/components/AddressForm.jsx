import { useState } from "react";

const AddressForm = ({ handleChildData }) => {
  const [address, setAddress] = useState({
    fullName: "",
    street1: "",
    street2: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  });

  const handleFullName = (e) => {
    setAddress({ ...address, fullName: e.target.value });
  };

  const handleStreet1 = (e) => {
    setAddress({ ...address, street1: e.target.value });
  };

  const handleStreet2 = (e) => {
    setAddress({ ...address, street2: e.target.value });
  };
  const handleCity = (e) => {
    setAddress({ ...address, city: e.target.value });
  };
  const handlePostalCode = (e) => {
    setAddress({ ...address, postalCode: e.target.value });
  };
  const handleCountry = (e) => {
    setAddress({ ...address, country: e.target.value });
  };
  const handlePhoneNumber = (e) => {
    setAddress({ ...address, phoneNumber: e.target.value });
  };

  return (
    <>
      <div className="border-2 border-gray-200 border-rounded shadow-sm w-96 p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            DELIVERY ADDRESS
          </h3>
        </div>

        <div className="">
          <div className="divider"></div>

          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={address.fullName}
              onChange={handleFullName}
              placeholder="Full Name"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="street1"
              value={address.street1}
              onChange={handleStreet1}
              placeholder="Street Address 1"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="street2"
              value={address.street2}
              onChange={handleStreet2}
              placeholder="Street Address 2"
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleCity}
              placeholder="City"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handlePostalCode}
              placeholder="Postal Code"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleCountry}
              placeholder="Country"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={address.phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Phone Number"
              required
              className="input input-bordered input-sm w-full "
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-xs btn-info "
            type="button"
            onClick={() => handleChildData({ addressData: address })}
          >
            Save
          </button>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AddressForm;
