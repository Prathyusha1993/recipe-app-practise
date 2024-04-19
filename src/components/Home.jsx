import React from "react";
import VeggieRecipe from "./VeggieRecipe";
import TrendingRecipe from "./TrendingRecipe";

function Home() {
  return (
    <div>
      <VeggieRecipe />
      <TrendingRecipe />
    </div>
  );
}

export default Home;
