import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const Cart = () => {
  const { listProducts } = useContext(Context);
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);

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

  const handleRenderCart = (cardId) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProduct = cartArray.find((item) => item.id === +cardId);

    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại, cập nhật số lượng
      const updatedCartArray = cartArray.map((item) =>
        item.id === +cardId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartArray(updatedCartArray);
    } else {
      // Tìm sản phẩm trong danh sách mặt hàng
      const product = listProducts.find((item) => item.id === +cardId);

      if (product) {
        // Nếu sản phẩm tồn tại, thêm sản phẩm vào giỏ hàng
        const newCartItem = {
          id: product.id,
          quantity: 1,
          price: product.price,
          name: product.name,
          image: product.image,
        };
        setCartArray([...cartArray, newCartItem]);
      }
    }
  };

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

  return (
    <div className="bg-red-200 h-[500px]">
      <div className="flex flex-col gap-5 justify-center">
        {cartArray.length === 0 ? (
          <p>Không có sản phẩm nào trong giỏ hàng</p>
        ) : (
          cartArray?.map((item, index) => (
            <div className="cart-item gap-8 flex items-center" key={index}>
              <Link to={`/card/${item.id}`} className="img-card border">
                <img src={item?.image} />
              </Link>

              <div>Tên sản phẩm: {item?.name}</div>
              <div>Giá: {item?.price}</div>
              <div className="flex items-center">
                <button
                  className="flex justify-center item outline-none text-lg rounded-sm border border-[rgba(0,0,0,.09)] w-8 h-8"
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
                  className="flex justify-center item outline-none text-lg rounded-sm border border-[rgba(0,0,0,.09)] w-8 h-8"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
              </div>
              <div className="max-w-sm min-w-[16rem] text-left">
                Tổng Giá Của Sản Phẩm: {item?.quantity * item?.price}
              </div>
              <button
                className="button2 mt-4 right-4 "
                onClick={() => handleRemoveItem(item)}
              >
                Xóa Sản Phẩm
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
