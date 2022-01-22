import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Modal, Box, Typography } from "@mui/material";
import "./UpdateUser.css";

const UpdateUser = () => {
  var { id } = useParams();

  function submit(e) {
    // const getInputValue = (id) => document.getElementById(id).value;
    let first_name = document.getElementById("firstname").value;
    let last_name = document.getElementById("lastname").value;
    let division = document.getElementById("division").value;
    let district = document.getElementById("district").value;

    const user = { first_name, last_name, division, district };
    userinfo(user);
    console.log(user);
    document.getElementById("box").reset();
    e.preventDefault();
  }

  function userinfo(userdetails) {
    fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userdetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  const [user, setuser] = useState({});

  useEffect(() => {
    fetch("https://60f2479f6d44f300177885e6.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => findingUser(data));
  }, []);

  function findingUser(user) {
    var User = user.find((user) => user.id === id);

    setuser(User);
  }

  return (
    <div className="UpdateUser">
      <h3>User Update</h3>
      <hr />
      <div className="form">
        <form className="form" id="box">
          <h4>Name</h4>
          <div className="form-details">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="name"
              id="firstname"
              required
            ></input>
            <br />

            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="name"
              id="lastname"
              required
            ></input>
          </div>
          <h4>Division</h4>

          <div className="form-details">
            <select
              className="form-control"
              id="division"
              placeholder="Select your division"
              style={{ height: " 45px", padding: " 0" }}
              required
            >
              <option value="Chittagong">Chittagong</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Barishal">Barishal</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Mymensingh ">Mymensingh </option>
            </select>
            <h3 id="rightdis">District</h3>

            <select
              className="form-control"
              id="district"
              placeholder="Select your district"
              required
            >
              <option value="Chittagong">Dhaka</option>
              <option value="Dhaka">Chittagong</option>
              <option value="Barishal">Barishal</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Mymensingh ">Mymensingh </option>
              <option value="Chittagong">Sylhet</option>
              <option value="Dhaka">Hobigonj</option>
              <option value="Barishal">Cumilla</option>
              <option value="Khulna">Rangamati</option>
              <option value="Sylhet">Cox-Bazar</option>
              <option value="Rajshahi">Capai-Nababgonj</option>
              <option value="Mymensingh ">Vola </option>
            </select>
          </div>
          <div className="form-button">
            <Button
              className="cancel"
              style={{
                marginRight: "20px",
                marginTop: "30px",
                padding: "14px 35px",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              style={{
                marginRight: "20px",
                marginTop: "30px",
                padding: "14px 35px",
              }}
              className="Save"
              variant="contained"
              onClick={submit}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
