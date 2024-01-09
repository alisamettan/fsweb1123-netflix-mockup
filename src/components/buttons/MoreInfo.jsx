import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 0.3rem;
  color: white;
  background: gray;
  padding: 0.8rem 2rem;
`;

const ButtonText = styled.span`
  margin-left: 1rem;
`;

export default function MoreInfo() {
  return (
    <Button>
      <FontAwesomeIcon icon={faCircleInfo} size="xl" />
      <ButtonText>More Info</ButtonText>
    </Button>
  );
}
