import styled from "styled-components";

const Services = () => {
  return (
    <Container id="services">
      <Title>Our Services</Title>

      <Wrapper>
        <Card>
          <Icon src="/assets/images/svg-1.svg" alt="" />
          <Subtitle>Reduce Expenses</Subtitle>
          <Description>
            We help reduce your fees and increase your overall revenue.
          </Description>
        </Card>

        <Card>
          <Icon src="/assets/images/svg-1.svg" alt="" />
          <Subtitle>Virtual Offices</Subtitle>
          <Description>
            You can access our platform online anywhere in the world.
          </Description>
        </Card>

        <Card>
          <Icon src="/assets/images/svg-1.svg" alt="" />
          <Subtitle>Premium Benefits</Subtitle>
          <Description>
            Unlock our special membership card that returns 5% cash back.
          </Description>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default Services;
