import React from "react";

import Hero from "./Hero/Hero";
import Residencies from "./Residencies/Residencies";

import SearchCard from "./Search/Search";

const Website = () => {
  return (
    <div>
      <Hero />

      <SearchCard />
      <Residencies />
    </div>
  );
};

export default Website;
