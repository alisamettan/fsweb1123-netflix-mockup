import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.25rem 4rem 0.25rem 4rem;
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Logo = styled.p`
  color: red;
  font-size: 3rem;
  margin: 1rem;
  font-weight: 700;
`;

const SignInButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
`;

const UserPanel = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

const Avatar = styled.img`
  border-radius: 0.3rem;
  width: 45px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const UserName = styled.p`
  font-size: 1.3rem;
`;

export default function Header(props) {
  const { selectedProfile } = props;
  const history = useHistory();

  const handleSignInClick = () => {
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <Logo>WiTFLiX</Logo>
      {selectedProfile ? (
        <>
          <NavMenu />
          <UserPanel>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <UserName>{selectedProfile.nickname}</UserName>
            <FontAwesomeIcon icon={faBell} />
            <Avatar src={selectedProfile.avatar} />
          </UserPanel>
        </>
      ) : (
        <SignInButton data-test-id="signin-button" onClick={handleSignInClick}>
          Sign In
        </SignInButton>
      )}
    </HeaderContainer>
  );
}
