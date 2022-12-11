import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";
import Logo from "components/common/Logo";

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
                من نحن
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="gifts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                جوائز المؤتمرات
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => scroll.scrollToTop()}>
                <RxDoubleArrowDown /> خدماتنا
              </NavLink>

              <SubMenu>
                <NavItem>
                  <NavRoute to="/">محور جوائز التميز</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">محور الأبحاث والكتب والترجمة</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">محور خدمات منسوبي التعليم</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">محور المبادرات</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">محور الحقائب التدريبية</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">محور التصميم</NavRoute>
                </NavItem>

                <NavItem>
                  <NavRoute to="/">
                    محور الخدمات البرمجية وتطبيقات الجوال
                  </NavRoute>
                </NavItem>
              </SubMenu>
            </NavItem>

            <NavItem>
              <NavLink
                to="ads"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                جديد الإعلانات
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="partners"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                آراء الشركاء
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
  z-index: 99999;

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
  color: #243262;

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
  position: relative;

  &:hover ul {
    display: block;
  }
`;

const SubMenu = styled(NavMenu)`
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: -50%;
  color: #010606;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: none;

  ${NavItem} {
    height: fit-content;
  }
`;

const NavLink = styled(ScrollLink)`
  font-size: 17px;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #010606;

  &:hover {
    transition: 0.2s ease-out;
    color: #e8591d;
  }

  &.active {
    border-bottom: 3px solid #e8591d;
  }
`;

const NavRoute = styled(RouterLink)`
  display: inline-block;
  width: 230px;
  font-size: 14px;
  padding: 7px 4px;
  border-bottom: 1px solid #eee;
  transition-duration: 200ms;

  &:hover {
    transition: 0.2s ease-out;
    color: #e8591d;
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
  display: flex;
  align-items: center;
  gap: 7px;

  svg {
    font-size: 20px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

export default Navbar;
