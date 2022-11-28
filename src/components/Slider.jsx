import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const pictures = [];
for (let i = 1; i <= 19; i++) pictures.push(`/assets/images/ad-${i}.jpg`);

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
  return (
    <Container>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe
        enableTilt
        enableAutoPlay
        pagination={false}
      >
        {pictures.map((pic, index) => (
          <Item key={`${pic}#${index}`} src={pic} alt="" />
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 95vw;
  max-width: 1100px;
`;

const Item = styled.img`
  height: 350px;
  width: 100%;
  object-fit: fill;
  -o-object-fit: fill;
`;

export default Slider;
