import styled from "styled-components";

const Movie = styled.div`
  width: 16%;
  display: flex;
  align-items: center;
`;

const Index = styled.span`
  display: inline-block;
  font-size: 15rem;
  margin: 0;
  color: #111;
  line-height: 1;
  font-weight: bolder;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: gray;
`;

const Poster = styled.img`
  display: inline-block;
  border-radius: 0.5rem;
  width: 120px;
  margin-left: -30px;
  height: 180px;
`;

export default function MovieItem({ poster, index }) {
  return (
    <Movie>
      <Index>{index}</Index>
      <Poster src={poster} />
    </Movie>
  );
}
