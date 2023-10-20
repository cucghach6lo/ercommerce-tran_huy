import React from "react";
import "./Residencies.css";
import { useContext } from "react";
import { Context } from "../../context/context";

import Category from "../Category/Category";

const Residencies = () => {
  const { category } = useContext(Context);

  const getCakeCategoryName = (categoryId) => {
    const cakeCategory = category.find((cat) => cat.id === categoryId);
    return cakeCategory ? cakeCategory.name : "Danh mục không xác định";
  };

  return (
    <div className="bg-red-200  py-4">
      <div className="flex gap-y-8 justify-center items-center flex-wrap">
        <img src="https://theme.hstatic.net/200000411281/1000949882/14/icon-title-home-featured-product.png?v=240" />
      </div>
      <div className="flex flex-col">
        <span className=" text-[#ffa500] text-3xl font-semibold">
          Sản phẩm nổi bật
        </span>
        <span className="text-[#8c8b8b] text-[1.5rem]">
          Cập nhật về những sản phẩm nổi bật nhất từ Fresh Garden
        </span>
      </div>
      <div className=" flex justify-center items-center"></div>
      <Category />
    </div>
  );
};

export default Residencies;
