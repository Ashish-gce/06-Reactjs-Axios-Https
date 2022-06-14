import React, { useState } from "react";
import "./App.css";
import { CustomerInfo } from "./components/CustomerInfo";
import { UserList } from "./components/UserList";

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            React Hooks with HTTP calls - using Axios
          </a>
          <ul className="ml-auto font-weight-bold text-white">
            <li>Login</li>
          </ul>
        </div>
      </nav>

      <UserList />

      <CustomerInfo />

      <div style={{ marginBottom: 150 }}></div>
    </React.Fragment>
  );
};

export default App;
