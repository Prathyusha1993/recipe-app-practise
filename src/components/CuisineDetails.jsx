import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const API_KEY = "6b4d99fed1c642a0a1aa1e1927e71cad";
function CuisineDetails() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisineDetails(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCuisineDetails = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`
    );
    const data = await api.json();
    console.log(data.results);
    setCuisine(data.results);
  };

  return (
    <Grid>
      <h4>Cuisine Details</h4>
      {cuisine.map((item) => {
        return (
          <Card>
            <Link to={"/recipe/" + item.id}>
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} />
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: reapeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 50%;
    border-radius: 2rem;
    margin-left: 5rem;
  }
  p {
    text-decoration: none;
    margin-left: 5rem;
    margin-bottom: 0.5rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default CuisineDetails;
