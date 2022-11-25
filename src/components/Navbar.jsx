import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

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
          <NavLogo href="#" onClick={() => scroll.scrollToTop()}>
            <Part1>top</Part1>
            <Part2>line</Part2>
          </NavLogo>

          <MobileIcon onClick={onOpenMenu}>
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
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Discover
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
                activeClass="active"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: ${({ scrollnav }) => (scrollnav ? "#000" : "transparent")};
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
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled.a`
  color: #e8591d;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  text-decoration: none;
`;

const Part1 = styled.span`
  color: #e8591d;
`;

const Part2 = styled.span`
  color: #2b3864;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

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

const NavBtnLink = styled(ScrollLink)`
  border-radius: 50px;
  background-color: #e8591d;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;

export default Navbar;
