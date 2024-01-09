import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 1.3rem;
  justify-content: flex-start;
  width: 80%;
  margin-left: 2rem;
`;

export default function NavMenu() {
  return (
    <Nav>
      <Link to="/browse">Home</Link>
      <Link to="/browse">Tv Shows</Link>
      <Link to="/browse">Movies</Link>
      <Link to="/browse">New&Popular</Link>
      <Link to="/browse">My List</Link>
      <Link to="/browse">Browse By Language</Link>
    </Nav>
  );
}
