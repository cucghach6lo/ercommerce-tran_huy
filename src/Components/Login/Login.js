import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const LoginPage = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleLoginPage = (e) => {
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      username: username,
      password: password,
      gender: gender,
      phone: phone,
      email: email,
      address: address,
    };
  };

  return (
    <section className="login-container">
      {/* ...Giao diện hiện tại của trang đăng nhập... */}
      <div className="login-title"> Log in</div>
      <form onSubmit={handleLoginPage}>
        {/* ...Các trường nhập liệu và nút submit... */}
        <label>FULLNAME</label>
        <input
          type="text"
          placeholder="Enter your fullname"
          onChange={(e) => setFullname(e.target.value)}
        />
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>GENDER</label>
        <input
          type="text"
          placeholder="Enter your gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <label>PHONE</label>
        <input
          type="text"
          placeholder="Enter your phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>ADDRESS</label>
        <input
          type="text"
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit"> Continue </button>
      </form>
      {/* Liên kết đến trang Logout */}
      <Link to="/logout">Đăng Xuất</Link>

      {/* Liên kết đến trang Forgot Password */}
      <Link to="/forgotpassword">Quên Mật Khẩu</Link>
    </section>
  );
};

export default LoginPage;
