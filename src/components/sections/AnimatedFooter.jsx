import styled from "styled-components";
import {
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "components/common/Logo";

const AnimatedFooter = () => {
  return (
    <Container>
      <WavesContainer>
        <Wave1 />
        <Wave2 />
        <Wave3 />
        <Wave4 />
      </WavesContainer>

      <Wrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Logo />

            <WebsiteRights>
              Top Line &copy; {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://t.me/topline2030"
                target="__blank"
                aria-label="Facebook"
              >
                <FaTelegram />
              </SocialIconLink>

              <SocialIconLink
                href="https://instagram.com/toplinework"
                target="__blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="https://twitter.com/topline2030"
                target="__blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href="https://wa.me/970599563638"
                target="__blank"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </SocialIconLink>

              <SocialIconLink
                href="mailto:topline.work.2030@gmail.com"
                target="__blank"
                aria-label="G-Mail"
              >
                <FaGoogle />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #101522;

  /* new code */
  width: 100%;
  position: relative;
`;

const Wrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover > svg {
    transition: 0.5s ease-out;
    color: #e8591d;
    transform: rotate(360deg);
  }
`;

const WavesContainer = styled.div``;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: url("/assets/images/wave-white.png");
  background-size: 1000px 100px;
`;

const Wave1 = styled(Wave)`
  animation: animate1 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;

  @keyframes animate1 {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 1000px;
    }
  }
`;

const Wave2 = styled(Wave)`
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;

  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: -1000px;
    }
  }
`;

const Wave3 = styled(Wave)`
  animation: animate3 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;

  @keyframes animate3 {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 1000px;
    }
  }
`;

const Wave4 = styled(Wave)`
  animation: animate4 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;

  @keyframes animate4 {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: -1000px;
    }
  }
`;

export default AnimatedFooter;
