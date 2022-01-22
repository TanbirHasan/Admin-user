import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./AdminUserDetails.css";

const AdminUserDetails = (props) => {
  const { id, first_name, last_name, user_type, division, district } =
    props.admin;


    console.log(props.admin)
  return (
    <div className="Admin-details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table id="adminuserdetailstable">
              <tbody>
              <tr>
                <td>{first_name}</td>
                 <td>{last_name}</td>
                  <td>{user_type}</td>
                  <td>{division}</td>

                <td>{district}</td>
              
                <Link to={"/adminuserdetails/" + id}>
                  {" "}
                  <td>
                    <button>Detail View</button>
                  </td>
                </Link>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminUserDetails;
