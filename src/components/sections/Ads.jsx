import styled from "styled-components";
import Slider from "components/common/Slider";

const Ads = () => {
  return (
    <Container id="ads">
      <Title>إعلانات</Title>

      <Wrapper>
        <Slider />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 100px 0;

  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  display: grid;
  place-content: center;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  color: #e8591d;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export default Ads;
