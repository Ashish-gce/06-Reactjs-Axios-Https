import React, { useEffect, useState } from "react";
import Axios from "axios";

export const CustomerInfo = () => {
  let [customers, setCustomers] = useState([]); // initially [] 'array' is empty
  let [errorMessage, setErrorMessage] = useState("");

  // get data from server, when the component is fully loded
  useEffect(() => {
    // let dataURL =
    //   ;

    Axios.get(
      "https://gist.githubusercontent.com/Ashish-gce/e6822034e277b02eb79e7681d5c051f4/raw/2c10ffc92f04a762f5ef350bb8f577082865bace/user-detail-2021.json"
    )
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });

    // return () => {
    //   setCustomers([]);
    // };
  }, []);

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(this.state.userinfo)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <table className="table table-hover table-striped text-center table-primary">
              <thead className="bg-dark text-white">
                <tr>
                  <th>SNO</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {customers.length > 0 ? (
                  <React.Fragment>
                    {customers.map((customer) => {
                      return (
                        <tr key={customer.login.uuid}>
                          <td>{customer.name.first}</td>
                          <td>{customer.email}</td>
                          <td>{customer.gender}</td>
                          <td>{customer.location.city}</td>

                          {/* <td>
                          <img
                            src={customer.picture.large}
                            alt=""
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>
                          {customer.name.first} {customer.name.last}
                        </td>
                        <td>{customer.dob.age} Yrs.</td>
                        <td>{customer.email}</td>
                        <td>{customer.location.city}</td> */}
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
