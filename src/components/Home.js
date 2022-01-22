import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import "./Home.css";


const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


 

  const [field, setField] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "100px",
    transform: "translate(-50%, -50%)",
    width: 700,
    backgroundColor: "white",
  };

  function disableseletor() {
    var user = document.getElementById("user").value;

    if (user === "Admin") {
      setField("disabled");
    } else {
      setField("");
    }
  }

  function submit(e) {
    validateFormforfirsname();
    validateFormforlastname();

    const getInputValue = (id) => document.getElementById(id).value;
    let first_name = getInputValue("firstname");
    let last_name = getInputValue("lastname");
    let user_type = getInputValue("user");
    let division = getInputValue("division");
    let district = getInputValue("district");

    const id = Math.floor(Math.random() * 1000) + "";

    const user = { id, first_name, last_name, user_type, division, district };
    userinfo(user);
    document.getElementById("box").reset();
    e.preventDefault();
  

    
  // let list = [];

  // if (localStorage.getItem("list")) {
  //   list = JSON.parse(localStorage.getItem("list"));
  //   console.log(list)
  // }
  // list.push(user);
  // localStorage.setItem("list", JSON.stringify(list));
   }

 

  function userinfo(userdetails) {
    fetch("https://61e8c7047ced4a00172ff68f.mockapi.io/data", {
      method: "POST",
      body: JSON.stringify(userdetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  function validateFormforfirsname() {
    // Retrieving the values of form elements
    var firstname = document.getElementById("firstname").value;

    // Defining error variables with a default value
    var nameErrfirst = true;

    // Validate name
    if (firstname == "") {
      printError("nameErrfirst", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(firstname) === false) {
        printError("nameErrfirst", "Please enter a valid name");
      } else {
        printError("nameErrfirst", "");
        nameErrfirst = false;
      }
    }
  }

  function validateFormforlastname() {
    // Retrieving the values of form elements
    var lastname = document.getElementById("lastname").value;

    // Defining error variables with a default value
    var nameErrlast = true;

    // Validate name
    if (lastname == "") {
      printError("nameErrlast", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(lastname) === false) {
        printError("nameErrlast", "Please enter a valid name");
      } else {
        printError("nameErrlast", "");
        nameErrlast = false;
      }
    }
  }

  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button variant="contained" onClick={handleOpen} id="adduserbutton">
              Add User
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="information" style={style}>
                <h2>Profile Information : Create</h2>
                <hr />
                <form action="" id="box">
                  <div className="row">
                    <div className="col-md-4">
                      <label>FirstName</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                        name="name"
                        id="firstname"
                        required
                      ></input>
                      <div class="error" id="nameErrfirst"></div>
                      <br />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      {" "}
                      <label>LastName</label>
                    </div>
                    <div className="col-md-8">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your last name"
                        name="name"
                        id="lastname"
                        required
                      ></input>
                      <div class="error" id="nameErrlast"></div>
                      <br />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      {" "}
                      <label>User Type</label>
                    </div>
                    <div className="col-md-8">
                      {" "}
                      <select
                        className="form-control"
                        id="user"
                        onClick={disableseletor}
                        required
                      >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                      </select>
                      <br />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <label>Division</label>
                    </div>

                    <div className="col-md-8">
                      <select
                        className="form-control"
                        style={{ marginBottom: "25px" }}
                        id="division"
                        disabled={field}
                        onChange={divisionsList}
                        required
                      >
                        <option placeholder="Select Division"  >
                          
                        </option>

                        <option value="Dhaka">Dhaka</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Khulna">Khulna</option>

                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>

                        <option value="Mymensingh ">Mymensingh </option>
                        <option value="Rangpur ">Rangpur </option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <label for="district">Select District</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name=""
                        id="district"
                        disabled={field}
                        required
                      ></select>
                    </div>
                  </div>

                  {/* <option value="Chittagong">Dhaka</option>
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
              <option value="Mymensingh ">Vola </option> */}

                  <Button
                    className="cancel"
                    style={{
                      margin: " 0px",
                      padding: "12px 60px",
                      marginTop: "20px",
                      backgroundColor: "#f2f2f2",
                      fontSize: " 15px",
                      borderRadios: "5px",
                      border: " none",
                      marginRight: "50px",
                      color: "#013a6d",
                    }}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      margin: " 0px",
                      padding: "12px 60px",
                      marginTop: "20px",
                      backgroundColor: "#013a6d",
                      fontSize: " 15px",
                      borderRadios: "5px",
                      border: " none",
                      marginRight: "50px",
                      color: "#f2f2f2",
                    }}
                    className="Save"
                    variant="contained"
                    onClick={submit}
                  >
                    Save
                  </Button>
                </form>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

function divisionsList() {
  // get value from division lists
  var diviList = document.getElementById("division").value;

  // set barishal division districts
  if (diviList === "Barishal") {
    var disctList =
      '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
  }
  // set Chattogram division districts
  else if (diviList === "Chattogram") {
    var disctList =
      '<option disabled selected >Select District</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';
  }
  // set Dhaka division districts
  else if (diviList === "Dhaka") {
    var disctList =
      '<option disabled selected>Select District</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
  }
  //  set/send districts name to District lists from division
  document.getElementById("district").innerHTML = disctList;
}
export default Home;
