import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

const Category = () => {
  const { listProducts } = useContext(Context);

  const sweetCake = listProducts.filter((card) => card.categorysId === 1);
  const saltedCake = listProducts.filter((card) => card.categorysId === 2);
  const cupCake = listProducts.filter((card) => card.categorysId === 3);
  const cheeseCake = listProducts.filter((card) => card.categorysId === 4);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="flex flex-row">
            {sweetCake?.map((card) => {
              return (
                <div className="">
                  <Link
                    to={`/card/${card.id}`}
                    className="flex flex-col gap-1  r-card"
                  >
                    <img src={card.image} className="img-card" />
                    <div>{card.name}</div>
                    <div>{card.price}</div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row">
            {saltedCake?.map((card) => {
              return (
                <div>
                  <Link
                    to={`/card/${card.id}`}
                    className="flex flex-col gap-1  r-card"
                  >
                    <img src={card.image} className="img-card" />
                    <div>{card.name}</div>
                    <div>{card.price}</div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row">
            {cupCake?.map((card) => {
              return (
                <div>
                  <Link
                    to={`/card/${card.id}`}
                    className="flex flex-col gap-1  r-card"
                  >
                    <img src={card.image} className="img-card" />
                    <div>{card.name}</div>
                    <div>{card.price}</div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row">
            {cheeseCake?.map((card) => {
              return (
                <div>
                  <Link
                    to={`/card/${card.id}`}
                    className="flex flex-col gap-1  r-card"
                  >
                    <img src={card.image} className="img-card" />
                    <div>{card.name}</div>
                    <div>{card.price}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
