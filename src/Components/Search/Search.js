import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
import "./Search.css";

const SearchCard = () => {
  const { listProducts } = useContext(Context);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryLower = search.toLowerCase();

    const filteredProducts = listProducts.filter((product) => {
      const { name, category } = product;
      const nameMatch = name.toLowerCase().includes(queryLower);
      const categoryIdMatch = category?.toLowerCase().includes(queryLower);
      return nameMatch || categoryIdMatch;
    });

    setSearchResults(filteredProducts);
  }, [search, listProducts]);

  return (
    <div className="bg-red-200">
      <div className="flex justify-center items-center flex-col p-6 w-full gap-8">
        <input
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Tìm kiếm bánh..."
        />
      </div>

      {search.trim() !== "" ? (
        <div className="p-6 flex gap-y-6 justify-center items-center flex-wrap">
          {searchResults.slice(0, 4).map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-center flex-col items-start r-card"
              >
                <div className="">
                  <Link
                    to={`/card/${product.id}`}
                    className="flex flex-col gap-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-card"
                    />
                    <div>{product.name}</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center"></div>
      )}
    </div>
  );
};

export default SearchCard;
