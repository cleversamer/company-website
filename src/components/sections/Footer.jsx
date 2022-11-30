import styled from "styled-components";
import {
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "components/common/Logo";

const Footer = () => {
  return (
    <Container>
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

export default Footer;
