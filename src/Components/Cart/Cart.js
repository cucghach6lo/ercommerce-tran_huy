import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const Cart = () => {
  const { listProducts } = useContext(Context);
  const { id } = useParams();
  const [voucherInput, setVoucherInput] = useState("");

  const card = listProducts?.find((item) => item.id === +id);

  // Lấy danh sách mặt hàng từ Local Storage hoặc sử dụng mảng rỗng nếu không có
  const [cartArray, setCartArray] = useState(
    JSON.parse(localStorage.getItem("cartitem")) || []
  );

  // Tạo một hiệu ứng sẽ được gọi khi giá trị của cartArray thay đổi
  useEffect(() => {
    // Lưu danh sách mặt hàng vào Local Storage
    localStorage.setItem("cartitem", JSON.stringify(cartArray));
  }, [cartArray]);

  const handleQuantityChange = (event, cartItem) => {
    // Kiểm tra nếu giá trị mới là số dương hoặc bằng 1
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const updatedCartArray = cartArray.map((item) =>
        item.id === cartItem.id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      );
      setCartArray(updatedCartArray);
    }
  };

  const handleIncreaseQuantity = (cartItem) => {
    const updatedCartArray = cartArray.map((item) =>
      item.id === cartItem.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    setCartArray(updatedCartArray);
  };

  const handleDecreaseQuantity = (cartItem) => {
    const updatedCartArray = cartArray.map((item) =>
      item.id === cartItem.id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );
    setCartArray(updatedCartArray);
  };

  const handleRemoveItem = (cartItem) => {
    const updatedCartArray = cartArray.filter(
      (item) => item.id !== cartItem.id
    );
    setCartArray(updatedCartArray);
  };

  // tổng giá sp
  let total = 0;
  if (cartArray.length == 0) {
    return total;
  } else {
    cartArray.map((item) => {
      total += item.quantity * item.price;
      console.log("====================================");
      console.log("quantity", item.quantity);
      console.log("====================================");
      return total;
    });
  }

  return (
    <div className="bg-red-200 min-h-[600px] ">
      <div className="flex flex-col gap-5 justify-center">
        {cartArray.length === 0 ? (
          <span>Không có sản phẩm nào trong giỏ hàng</span>
        ) : (
          cartArray?.map((item, index) => {
            const product = listProducts.find((p) => p.id === item.id);
            return (
              <div
                className="cart-item gap-8 flex items-center justify-center"
                key={index}
              >
                <Link to={`/card/${item.id}`}>
                  <img src={product?.image} className="img-card border" />
                </Link>

                <div className="w-[21%]  text-center">
                  Tên sản phẩm: {product?.name}
                </div>
                <div>Giá: {product?.price}</div>
                <div className="flex items-center">
                  <button
                    className="flex justify-center item outline-none text-lg rounded-sm border border-[rgba(0,0,0,.09)] w-[25%] h-8"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <input
                    min={1}
                    value={item?.quantity}
                    onChange={(e) => handleQuantityChange(e, item)}
                    className="max-w-[8rem] w-full h-8 border-none focus:outline-none text-center"
                  />
                  <button
                    className="flex justify-center item outline-none text-lg rounded-sm border border-[rgba(0,0,0,.09)] w-[25%] h-8"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <div className="max-w-sm min-w-[16rem] text-left">
                  Tổng Giá Của Sản Phẩm: {item?.quantity * product?.price}
                </div>
                <button
                  className="button2 mt-4 right-4"
                  onClick={() => handleRemoveItem(item)}
                >
                  Xóa Sản Phẩm
                </button>
              </div>
            );
          })
        )}
        <div className="flex flex-col items-center justify-center">
          <div className=" flex gap-2">
            <div>Mã giảm giá</div>
            <input className="rounded border"></input>
          </div>
          <div>Tổng Giá Của Các Sản Phẩm: {total}</div>

          <button className="button2 w-[30%] "> mua hang</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
