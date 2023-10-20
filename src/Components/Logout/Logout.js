import React, { useContext } from "react";
import { Context } from "../../context/context";
import "./Logout.css";
import { unstable_HistoryRouter } from "react-router-dom";

const Logout = () => {
  const { setLoggedInUser } = useContext(Context);
  const history = unstable_HistoryRouter();

  const handleLogout = () => {
    setLoggedInUser(false);
    history.push("/");
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Đăng Xuất</button>
    </div>
  );
};

export default Logout;
