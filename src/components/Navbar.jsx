import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = ({ onOpenMenu }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => setScrollNav(window.scrollY >= 80);

  return (
    <>
      <Nav scrollnav={scrollNav}>
        <NavbarContainer>
          <Logo />

          <MobileIcon scrollnav={scrollNav} onClick={onOpenMenu}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                من نحن
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                إكتشفنا
              </NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                activeClass="active"
              >
                خدماتنا
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="contact-us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                activeClass="active"
              >
                تواصل معنا
              </NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              scrollnav={scrollNav}
              href="https://wa.me/970599563638"
              target="__blank"
              aria-label="Whatsapp"
            >
              <FaWhatsapp /> أطلب خدمتك
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: ${({ scrollnav }) =>
    scrollnav ? "#f9f9f9" : "transparent"};
  color: ${({ scrollnav }) => (scrollnav ? "#010606" : "#f9f9f9")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ scrollnav }) => (scrollnav ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(ScrollLink)`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    color: #e8591d;
  }

  &.active {
    border-bottom: 3px solid #e8591d;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.a`
  font-weight: 600;
  border-radius: 50px;
  background-color: ${({ scrollnav }) => (scrollnav ? "#010606" : "#e8591d")};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({ scrollnav }) => (scrollnav ? "#fff" : "#010606")};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    font-size: 20px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ scrollnav }) => (scrollnav ? "#e8591d" : "#fff")};
    color: ${({ scrollnav }) => (scrollnav ? "#fff" : "#010606")};
  }
`;

export default Navbar;
