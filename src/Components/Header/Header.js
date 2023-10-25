import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const logOut = () => {
  localStorage.removeItem("isLogin");
  window.location.href = "/";
};

const isName = () => {
  localStorage.getItem("isName");
};
const Header = () => {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="h-wrapper bg-blue-100">
      <div className="h-container flex gap-y-8  items-center flex-wrap w-full p-6 px-4 py-4 justify-between">
        {/* left side  */}
        <div className="left-side ">
          <Link to="/">
            <img
              src="https://theme.hstatic.net/200000411281/1000949882/14/logo.png?v=229"
              width={300}
            />
          </Link>
        </div>
        {/* right side  */}
        <div className="right-side justify-between ">
          {/* menu  */}
          <div className="h-menu flex gap-y-8 justify-center items-center flex-wrap gap-8">
            <a>Liên Hệ</a>
            <Link to="/cart">Cart</Link>
            <a>65 Dương Tôn Hải, Đà Nẵng</a>
            {isLogin ? (
              <div className="flex gap-4 items-center">
                <span>
                  <Link to="/profile">{isLogin}</Link>
                </span>
                <button className="button" onClick={logOut}>
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button className="button">
                  <Link to="/login">Đăng Nhập</Link>
                </button>
                <button className="button2">
                  <Link to="/register">Đăng Ký</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
