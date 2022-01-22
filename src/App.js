import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import AdminUser from "./components/AdminUser";
import AdminUserDetails from "./components/AdminUserDetails";
import Fulldetails from "./components/Fulldetails";
import UpdateUser from "./components/UpdateUser";
import { createContext, useState } from "react";

export const userContext = createContext();
function App() {
  const [loggedInuser, setloggedInuser] = useState({});
  const style = {
    borderRadius: "10px",
    padding: "50px",
  };
  return (
    <userContext.Provider value={[loggedInuser, setloggedInuser]}>
      <div className="App" style={style}>
        <Home></Home>

        <Router>
          <Switch>
            <Route exact path="/">
              <AdminUser></AdminUser>
            </Route>
            <Route path="/fulldetails">
              <Fulldetails></Fulldetails>
            </Route>
            <Route path="/adminuserdetails/:id">
              <Fulldetails></Fulldetails>
            </Route>
            <Route path="/updateuser/:id">
              <UpdateUser></UpdateUser>
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
