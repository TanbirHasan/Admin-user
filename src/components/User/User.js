import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import AdminUserDetails from '../AdminUserDetails';
import axios from 'axios';

const User = () => {

  const [alluser, setalluser] = useState([]);
  const [admin, setadmin] = useState([]);

//   useEffect(() => {

//        fetch("https://61e8c7047ced4a00172ff68f.mockapi.io/data?user_type=User")
//       .then((res) => res.json())
//       .then((data) => setalluser(data));
      
//   }, []);

//   console.log(alluser);




  const handleclickuser = async() => {
    const data = await axios.get('https://61e8c7047ced4a00172ff68f.mockapi.io/data?user_type=User')
    
    console.log(data.data)

    setalluser(data.data);
}
    return (
        <div>
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
              onClick={ handleclickuser}
            >
              Employee User Type
            </Button>
          </div>
           {alluser.map((Admin) => (
              <AdminUserDetails key={Admin.id} admin={Admin}></AdminUserDetails>
            ))}
            
        </div>
    );
};

export default User;