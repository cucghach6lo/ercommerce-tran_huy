import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="flex gap-y-8  items-center flex-wrap w-full p-6 px-4 py-4 justify-between gap-x-8">
        <Link to="/">
          <img
            src="https://theme.hstatic.net/200000411281/1000949882/14/logo.png?v=229"
            width={300}
          />
        </Link>
        <div className="h-menu flex gap-y-8 justify-center items-center flex-wrap gap-8">
          <a>Liên Hệ</a>
          <a>CSKH: cucghach6lo@gmail.com</a>
          <a>65 Dương Tôn Hải, Đà Nẵng</a>
          <button className="button">Đăng xuất</button>
        </div>
      </div>
      <div className="flex gap-y-8 justify-center items-center flex-wrap pt-8">
        form account
      </div>
    </div>
  );
};

export default Admin;
