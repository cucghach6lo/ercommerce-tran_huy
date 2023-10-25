import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { listUser } = useContext(Context);
  console.log(listUser);
  const { id } = useParams();
  const isLogin = localStorage.getItem("isLogin");
  const obj = listUser.find((item) => item.id == id);
  // lấy danh sách từ local storage

  const [name, setName] = useState(obj ? obj.name : "");
  const [password, setPassword] = useState(obj ? obj.password : "");
  const [email, setEmail] = useState(obj ? obj.email : "");
  useEffect(() => {}, [listUser]);
  console.log("====================================");
  console.log(password);
  console.log("====================================");

  const handleClick = () => {};

  return (
    <div className="flex justify-center bg-blue-200 h-96 ">
      <div className="flex flex-col gap-2 pt-6 ">
        <div>Tài Khoản: {isLogin}</div>
        <div>Email:{email}</div>
        <div>Tên: {name}</div>
        <input className="border rounded" placeholder="Sửa Tên Của Bạn"></input>
        <div>Mật Khẩu: {password}</div>
        <input
          className="border rounded "
          placeholder="Nhập mật khẩu của bạn"
        ></input>
        <input
          className="border rounded "
          placeholder="Nhập lại mật khẩu của bạn"
        ></input>

        <div>Địa Chỉ:</div>
        <input
          className="border rounded"
          placeholder="Địa chỉ mới của bạn"
        ></input>
        <div>Số Điện Thoại Của Bạn:</div>
        <input></input>
        <button onClick={handleClick} type="">
          Lưu
        </button>
      </div>
    </div>
  );
};

export default Profile;
