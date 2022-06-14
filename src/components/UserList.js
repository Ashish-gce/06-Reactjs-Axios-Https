import React, { useEffect, useState } from "react";
import Axios from "axios";

export const UserList = () => {
  let [users, setUsers] = useState([]); // initially [] 'array' is empty
  let [errorMessage, setErrorMessage] = useState("");

  // get data from server, when the component is fully loded
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("fetching data from server");
        setUsers(response.data);
      })
      .catch((error) => {
        // console.log(error)
        setErrorMessage(error);
      });

    //   after "componentDidMount()" -> useEffect() we need to do "componentWillUnmount()" -> that is in
    // Hooks case we need to "return()"
    return () => {
      setUsers([]);
    };
    //   💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 []  ->  empty array dependency is very important to "restrict" the 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯
    //   💯 💯💯 💯 💯 💯 💯💯  useEffect() calling unlimited 💯 💯 💯 💯💯 💯
    //   💯 💯 💯💯 💯 💯 💯 💯💯 [] -> "dependency" it runs "useEffect()" only one times 💯 💯 💯 💯💯 💯 💯💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯 💯 💯💯 💯 💯
  }, []);
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">User's List</p>
            <p className="lead">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <table className="table table-hover table-striped text-center text-primary">
              <thead className="bg-light text-white">
                <tr>
                  <th>S.NO.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  <React.Fragment>
                    {users.map((user, index) => {
                      return (
                        <tr /*key={user.id}*/ key={index}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.address.street}</td>
                          <td>{user.address.city}</td>
                          <td>{user.website}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  <p className="h3 text-danger mt-3">
                    Something went wrong, we can't fetch the data
                  </p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
