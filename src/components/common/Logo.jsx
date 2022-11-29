import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (
    <Container href="#" onClick={() => scroll.scrollToTop()}>
      <Image src="/assets/images/logo.png" alt="topline logo" />
    </Container>
  );
};

const Container = styled.a``;

const Image = styled.img`
  height: 50px;
  object-fit: cover;
`;

export default Logo;
