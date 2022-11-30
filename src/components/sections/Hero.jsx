import styled from "styled-components";
import VideoCarousel from "components/common/VideoCarousel";
import Typed from "react-typed";

const Hero = () => {
  return (
    <Container>
      <Title
        strings={["فريق توب لاين يرحب بكم!"]}
        typeSpeed={100}
        backSpeed={100}
        backDelay={100}
        loop
      />
      <VideoCarousel />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 110px;
  background-color: #f9f9f9;
`;

const Title = styled(Typed)`
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  margin-bottom: -50px;
  color: #e8591d;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: -30px;
  }
`;

export default Hero;
