import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import styled from "styled-components";

export const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export default function Login({ loggedUser, changeUser }) {
  return (
    <div>
      <Header loggedUser={loggedUser} />
      <FullPage>
        <h1>Sign Up WiTFLiX</h1>
        <SignUpForm changeUser={changeUser} />
      </FullPage>
    </div>
  );
}
