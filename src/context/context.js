import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {
  const [listUser, setListUser] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  const getDataUser = async () => {
    const response = await axios.get("http://localhost:3004/users");
    if (response.status === 200) {
      setListUser(response.data);
    }
  };

  // const getCategory =async()=>{
  //   const response = await axios.get ("")
  // }

  const getDataProducts = async () => {
    const response = await axios.get(
      "http://localhost:3004/products?_expand=categorys"
    );
    if (response.status === 200) {
      setListProducts(response.data);
    }
  };
  
  const getDataCategory = async()=>{

  }

  useEffect(() => {
    getDataUser();
    getDataProducts();
  }, []);

  return (
    <Provider
      value={{
        listUser,
        listProducts,
      }}
    >
      {children}
    </Provider>
  );
}

export { Context, MyContext };
