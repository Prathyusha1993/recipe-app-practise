import React from "react";
import Home from "./components/Home";
import Category from "./components/Category";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CuisineDetails from "./components/CuisineDetails";
import Search from "./components/Search";
import SearchedRecipe from "./components/SearchedRecipe";
import RecipeDetails from "./components/RecipeDetails";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      {/* <h3>Recipe App</h3> */}
      <BrowserRouter>
        <div>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>Deliciousss</Logo>
          </Nav>
        </div>
        <Search />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<CuisineDetails />} />
          <Route path="/searched/:search" element={<SearchedRecipe />} />
          <Route path="/recipe/:name" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
