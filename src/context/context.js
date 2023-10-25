import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {
  const [listUser, setListUser] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const isLogin = localStorage.getItem("isLogin");
  const [voucherData, setVoucherData] = useState([]);

  const getDataUser = async () => {
    const response = await axios.get("http://localhost:3004/users");
    if (response.status === 200) {
      setListUser(response.data);
    }
  };

  const getDataProducts = async () => {
    const response = await axios.get(
      "http://localhost:3004/products?_expand=categorys"
    );
    if (response.status === 200) {
      setListProducts(response.data);
    }
  };

  // const getData = async () => {
  //   const response = await axios.get("");
  //   if (response.status === 200) {
  //     setList(response.data);
  //   }
  // };
  //check gio hang
  // check data dang nhap

  const obj = listUser.find((item) => item.email === isLogin);

  const idLogin = obj ? obj.id : "";

  // check voucher

  const getVoucher = async () => {
    const response = await axios.get("https://localhost:3004/voucher");
    if (response.status === 200) {
      setVoucherData(response.data);
    }
  };

  useEffect(() => {
    getDataUser();
    getDataProducts();
    getVoucher();
  }, [setListUser, setListProducts]);

  return (
    <Provider
      value={{
        listUser,
        listProducts,
        isLogin,
        idLogin,
        // getData,
        voucherData,
      }}
    >
      {children}
    </Provider>
  );
}

export { Context, MyContext };
