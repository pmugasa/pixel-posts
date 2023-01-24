import axios from "axios";

const ShippingRates = () => {
  const options = {
    method: "GET",
    url: "https://api.aftership.com/postmen/v3/rates",
    withCredentials: false,
    params: {
      limit: "10",
      created_at_min: "2023-01-22",
      created_at_max: "2023-01-22",
    },
    headers: {
      "Content-Type": "application/json",
      "as-api-key": "asat_34e5eaab736f43f3879bdd69d4a88083",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <h1>Hello from ShippingRates</h1>;
};
export default ShippingRates;
