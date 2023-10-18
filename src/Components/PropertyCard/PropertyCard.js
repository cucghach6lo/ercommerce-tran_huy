import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { useParams } from "react-router-dom";

const PropertyCard = () => {
  const { listProducts } = useContext(Context);
  const { id } = useParams();
  const card = listProducts?.find((item) => item.id == id);

  return (
    <div>
      <img src={card?.image} className="" />
      <div>{card?.name}</div>
      <div>{card?.price}</div>
      <div>{card?.detail}</div>
    </div>
  );
};

export default PropertyCard;
