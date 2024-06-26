import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const API_KEY = "6b4d99fed1c642a0a1aa1e1927e71cad";
function SearchedRecipe() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchedRecipe(params.search);
  }, [params.search]);

  const getSearchedRecipe = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
    );
    const data = await api.json();
    console.log(data.results);
    setSearched(data.results);
  };
  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchedRecipe;
