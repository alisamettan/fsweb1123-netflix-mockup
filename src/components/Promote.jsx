import styled from "styled-components";
import PlayButton from "./buttons/PlayButton";
import MoreInfo from "./buttons/MoreInfo";

const Hero = styled.div`
  width: 100%;
  aspect-ratio: 2/1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5rem;
`;

const VideoFrame = styled.video`
  width: 120%;
  aspect-ratio: 2.4/1;
  border: 0;
  position: absolute;
  top: 0;
  left: -10%;
  right: 0;
  z-index: 1;
  object-fit: cover;
`;

const MovieTitle = styled.p`
  font-size: 7rem;
  margin: 0;
  font-weight: bold;
`;

const MovieDesc = styled.p`
  font-size: 1.5rem;
  text-align: left;
  width: 50%;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 999;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Promote() {
  return (
    <Hero>
      <VideoFrame autoPlay loop>
        <source
          src="http://127.0.0.1:5173/src/assets/videos/fubar.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </VideoFrame>
      <MovieDetails>
        <MovieTitle>FUBAR</MovieTitle>
        <MovieDesc>
          When a father and daughter discover they both secretly work for the
          CIA, an already dicey undercover mission turns into a dysfunctional
          family affair.
        </MovieDesc>
        <Buttons>
          <PlayButton />
          <MoreInfo />
        </Buttons>
      </MovieDetails>
    </Hero>
  );
}
