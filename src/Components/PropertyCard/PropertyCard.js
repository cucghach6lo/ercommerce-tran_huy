import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { useParams } from "react-router-dom";

// import { BsFillCartPlusFill } from "react-icons/bs1";
const PropertyCard = () => {
  const { listProducts } = useContext(Context);

  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [price, setPrice] = useState(null);

  const card = listProducts?.find((item) => item.id === +id);

  const currentCartValue = { id: id, quantity: quantity, price: price };

  useEffect(() => {
    if (card) {
      setPrice(card.price);
    }
  }, [card]);

  console.log(currentCartValue);

  const handleCartClick = (cardId) => {
    const cartArray = JSON.parse(localStorage.getItem("cartitem")) || [];

    const updateArray = [...cartArray];
    const productIndex = updateArray.findIndex((item) => item.id === cardId);
    if (productIndex !== -1) {
      updateArray[productIndex].quantity++;
      localStorage.setItem("cartitem", JSON.stringify(updateArray));
    } else {
      updateArray.push({ id: cardId, quantity: 1, price: price });
      localStorage.setItem("cartitem", JSON.stringify(updateArray));
    }
  };

  return (
    <div>
      <div className=" flex justify-center p-7 rounded-3xl">
        <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around">
          <div className="flex gap-6 w-auto h-auto ">
            <div className="bg-white w-full h-full flex flex-col flex-1">
              <img className="bg-white w-96" src={card?.image} alt="Selected" />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="font-bold text-[24px] leading-7">{card?.name}</h1>
              <p className="text-[16px]">{card?.detail}</p>
              <p className="font-bold text-[24px] leading-7">
                {parseInt(card?.price).toLocaleString("vi-VN")} đ
              </p>
              <div className="flex gap-6 flex-end"></div>

              <div className="flex items-center gap-5">
                <button
                  className="button"
                  onClick={() => handleCartClick(card?.id)}
                >
                  Mua Hàng
                </button>{" "}
              </div>
              <div className="flex items-center gap-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
