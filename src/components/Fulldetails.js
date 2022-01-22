import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import "./FullDetails.css";
import UpdateUser from "./UpdateUser";

const Fulldetails = () => {
  const [loggedInuser, setloggedInuser] = useContext(userContext);
  const { id } = useParams();
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://61e8c7047ced4a00172ff68f.mockapi.io/data")
      .then((res) => res.json())
      .then((data) => findingUser(data));
  }, []);

  function findingUser(user) {
    var User = user.find((user) => user.id === id);
    console.log(User);
    setuser(User);
    setloggedInuser(User);
  }

  return (
    <div className="User-details">
      <h2>User View</h2>
      <hr />
      <div className="container">
        <div className="details">
          <h3>First Name</h3>
          <h3>{user.first_name}</h3>
        </div>
        <div className="details">
          <h3>Last Name</h3>
          <h3>{user.last_name}</h3>
        </div>
        <div className="details">
          <h3>User Type</h3>
          <h3>{user.user_type}</h3>
        </div>
        <div className="details">
          <h3>Division</h3>
          <h3>{user.division}</h3>
        </div>
        <div className="details">
          <h3>District</h3>

          <h3>{user.district}</h3>
        </div>
        <div className="button">
          <button>Back</button>

          <Link to={"/updateuser/" + id}>
            {" "}
            <a href="#">Edit</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fulldetails;
