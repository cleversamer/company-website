import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About us</LinkTitle>
              <Link to="">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Investors</Link>
              <Link to="">Terms of service</Link>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Videos</LinkTitle>
              <Link to="">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Investors</Link>
              <Link to="">Terms of service</Link>
            </LinkItems>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <Link to="">How it works</Link>
              <Link to="">Testimonials</Link>
              <Link to="">Careers</Link>
              <Link to="">Investors</Link>
              <Link to="">Terms of service</Link>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <Link to="">Facebook</Link>
              <Link to="">Instagram</Link>
              <Link to="">Twitter</Link>
              <Link to="">YouTube</Link>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="#" onClick={() => scroll.scrollToTop()}>
              <LogoPart1>top</LogoPart1>
              <LogoPart2>line</LogoPart2>
            </SocialLogo>

            <WebsiteRights>
              Top Line &copy; {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://facebook.com"
                target="__blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://instagram.com"
                target="__blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="https://youtube.com"
                target="__blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink
                href="https://twitter.com"
                target="__blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href="https://whatsapp.com"
                target="__blank"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
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

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const LinkTitle = styled.h1`
  color: #e8591d;
  font-size: 14px;
  margin-bottom: 16px;
`;

const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #e8591d;
    transition: 0.3s ease-out;
  }
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

const SocialLogo = styled.a`
  color: #e8591d;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-weight: 700;
  text-decoration: none;
`;

const LogoPart1 = styled.span`
  color: #e8591d;
`;

const LogoPart2 = styled.span`
  color: #2b3864;
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