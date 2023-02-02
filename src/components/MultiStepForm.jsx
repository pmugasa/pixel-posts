import { useState } from "react";
import AddonsForm from "./AddonsForm";
import AddressForm from "./AddressForm";
import CustomsForm from "./CustomsForm";

const MultiStepForm = ({ setRtsData }) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    //customs items
    customsItems: {
      description: "",
      quantity: "",
      net_weight: "",
      mass_unit: "kg",
      value_amount: "",
      value_currency: "ZAR",
      origin_country: "RSA",
    },

    //address
    address: {
      fullName: "",
      street1: "",
      street2: "",
      city: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
    },

    //addons
    addons: {
      itemPhotos: "",
      deviceTesting: "",
      doubleWalledBox: "",
      bubbleWrap: "",
    },
  });
  console.log(formData.customsItems);
  const formTitles = ["Customs", "Delivery Address", "Addons"];
  //displaying the forms
  const PageDisplay = () => {
    if (page === 0) {
      return <CustomsForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressForm formData={formData} setFormData={setFormData} />;
    } else {
      return <AddonsForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="form-body">{PageDisplay()}</div>
        <div className="flex mt-4 space-x-4 ">
          <button
            className="btn btn-primary btn-sm"
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-primary btn-sm "
            onClick={() => {
              if (page === formTitles.length - 1) {
                console.log(formData);
                setRtsData(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Request Packing" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
