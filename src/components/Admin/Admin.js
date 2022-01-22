import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import AdminUserDetails from '../AdminUserDetails';
import User from '../User/User';
import axios from 'axios';

const Admin = () => {


  const [alluser, setalluser] = useState([]);
  const [admin, setadmin] = useState([]);

//   useEffect(() => {

//        fetch("https://61e8c7047ced4a00172ff68f.mockapi.io/data?user_type=Admin")
//       .then((res) => res.json())
//       .then((data) => setalluser(data));
      
//   }, []);

//   console.log(alluser);

//    const handleclickadmin = (alluser) => {
  
//     setadmin(alluser);
//     document.getElementById("table").style.display = "block";
//     <User style={{display:'none'}}/>
//   };

const handleclickadmin = async() => {
    const data = await axios.get('https://61e8c7047ced4a00172ff68f.mockapi.io/data?user_type=Admin')
    
    console.log(data.data)

    setalluser(data.data);
}

    return (
        <div>
             <div className="button-one">
            <Button
              style={{
                marginTop: "10px",
                borderRadius: "20px",
                padding: "10px 55px",
                marginRight: "10px",
              }}
              id="Admin"
              onClick={handleclickadmin}
            >
              Admin User Type
            </Button>
            </div>
             {alluser.map((Admin) => (
              <AdminUserDetails key={Admin.id} admin={Admin}></AdminUserDetails>
            ))}
        </div>
    );
};

export default Admin;