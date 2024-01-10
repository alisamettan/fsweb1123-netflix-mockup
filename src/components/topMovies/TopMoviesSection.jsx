import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieItem from "./MovieItem";

const MovieDiv = styled.div`
  padding: 0.2rem 5rem;
  margin-top: -120px;
  margin-bottom: 150px;
  position: relative;
  z-index: 1000;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 1.8rem;
  margin: 0.5em 0;
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function TopMoviesSection({ title }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const options = {
      params: { list: "top_boxoffice_200", limit: "6" },
      headers: {
        "X-RapidAPI-Key": "473189e1e1mshb979885052c38bep131469jsn56394a75c6cf",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .get("https://moviesdatabase.p.rapidapi.com/titles/random", options)
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      });
  }, []);

  return (
    <MovieDiv>
      <Title>{title}</Title>
      <MoviesContainer>
        {movieList.map((item, index) => {
          return (
            <MovieItem
              poster={item.primaryImage?.url}
              index={index + 1}
              key={index}
            />
          );
        })}
      </MoviesContainer>
    </MovieDiv>
  );
}
