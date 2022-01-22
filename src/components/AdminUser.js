import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import "./AdminUser.css";

import { Link } from "react-router-dom";
import AdminUserDetails from "./AdminUserDetails";
import Admin from "./Admin/Admin";
import User from "./User/User";

const AdminUser = () => {
  // const [alluser, setalluser] = useState([]);
  // const [admin, setadmin] = useState([]);

  // useEffect(() => {

  //      fetch("https://61e8c7047ced4a00172ff68f.mockapi.io/data")
  //     .then((res) => res.json())
  //     .then((data) => setalluser(data));
      
  // }, []);

  // console.log(alluser);


 

  // const handleclickadmin = (alluser) => {
  //   const adminuser = alluser.filter((user) => user.user_type === "Admin");
  //   console.log(adminuser);
  //   setadmin(adminuser);
  //   document.getElementById("table").style.display = "block";
  // };

  // const handleclickuser = (alluser) => {
  //   const user = alluser.filter((user) => user.user_type === "User");
  //   console.log(user);
  //   setadmin(user);
  //   document.getElementById("table").style.display = "block";
  // };

  // console.log(admin);

  return (
    <div className="AdminUser">

      <Admin/>
      <User/>
    
       
          {/* <div className="button-one">
            <Button
              style={{
                marginTop: "10px",
                borderRadius: "20px",
                padding: "10px 55px",
                marginRight: "10px",
              }}
              id="Admin"
              onClick={() => handleclickadmin(alluser)}
            >
              Admin User Type
            </Button>
          </div>
          <div className="button-two">
            <Button
              style={{
                marginTop: "10px",
                borderRadius: "20px",
                padding: "10px 55px",
                marginRight: "10px",
              }}
              id="User"
              className="User"
              onClick={() => handleclickuser(alluser)}
            >
              Employee User Type
            </Button>
          </div> */}

          <div className="Admin">
            <table id="table">
              <tbody>
              <tr>
                <th>
                  First-Name
                </th>
                  <th>
                  Last-Name
                </th>
                  <th>
                  User-Type
                </th>
             
                 <th>
                  Division
                </th>
                  <th>
                 District
                </th> 
               
                </tr>
              </tbody>
            </table>
            {/* {admin.map((Admin) => (
              <AdminUserDetails key={Admin.id} admin={Admin}></AdminUserDetails>
            ))} */}
          </div>
       
  

      {/* <div
        className="Admin-list"
        id="Admin"
        style={{
          margin: "80px",
          padding: "10px",

          position: "absolute",
          left: "5%",
        }}
      ></div> */}
    </div>
  );
};

// function AdminType() {
//   const AdminUser = JSON.parse(localStorage.getItem("list"));

//   const adminlist = document.getElementById("Admin");
//   adminlist.innerHTML = " ";

//   for (var i = 0; i < AdminUser.length; i++) {
//     // console.log(AdminUser[i].usertype);
//     if (AdminUser[i].usertype === "Admin") {
//       //   var user = AdminUser[i];
//       const { firstname, lastname, usertype, division, id } = AdminUser[i];

//       adminlist.innerHTML += ` <div id="details">

//         <h3><span>FirstName: ${firstname}</span></h3>
//         <h3><span>LastName: ${lastname}</span></h3>
//         <h3><span>UserType: ${usertype}</span></h3>
//         <h3><span>Divsion: ${division}</span></h3>
//         <Link to={${id}}><button>Details</button></Link>

//         </div>`;

//       //  console.log(AdminUser[0].usertype);
//     }
//   }
// }

export default AdminUser;
