import styled from "styled-components";
import VideoCarousel from "components/common/VideoCarousel";

const Hero = () => {
  return (
    <Container>
      <VideoCarousel />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  background-color: #f9f9f9;
`;

export default Hero;
