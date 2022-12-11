import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";

const Sidebar = ({ isOpen, onCloseMenu }) => {
  const onNavItemClick = () => {
    setTimeout(onCloseMenu, 350);
  };

  return (
    <Container isOpen={isOpen}>
      <Icon onClick={onCloseMenu}>
        <CloseIcon color="#243262" />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={onCloseMenu}>
            من نحن
          </SidebarLink>

          <SidebarLink to="gifts" onClick={onCloseMenu}>
            جوائز المؤتمرات
          </SidebarLink>

          <SidebarLink>
            <RxDoubleArrowDown /> خدماتنا
            <SubMenu>
              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور جوائز التميز</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور الأبحاث والكتب والترجمة</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور خدمات منسوبي التعليم</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور المبادرات</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور الحقائب التدريبية</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">محور التصميم</NavRoute>
              </NavItem>

              <NavItem onClick={onNavItemClick}>
                <NavRoute to="/">
                  محور الخدمات البرمجية وتطبيقات الجوال
                </NavRoute>
              </NavItem>
            </SubMenu>
          </SidebarLink>

          <SidebarLink to="ads" onClick={onCloseMenu}>
            جديد الإعلانات
          </SidebarLink>

          <SidebarLink to="partners" onClick={onCloseMenu}>
            آراء الشركاء
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarOuterLink
            href="https://wa.me/970599563638"
            target="__blank"
            aria-label="Whatsapp"
          >
            <FaWhatsapp /> أطلب خدمتك
          </SidebarOuterLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  z-index: 9999999999;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #243262;
  cursor: pointer;
  position: relative;

  svg {
    margin-right: 7px;
    font-size: 20px;
  }

  &:hover {
    color: #e8591d;
    transition: 0.2s ease-in-out;
  }

  &:hover ul {
    display: block;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarOuterLink = styled.a`
  border-radius: 50px;
  background-color: #e8591d;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  font-weight: 700;
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
    background-color: #243262;
    color: #fff;
  }
`;

const NavItem = styled.li`
  height: 80px;
  position: relative;

  &:hover ul {
    display: block;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  position: absolute;
  top: 50px;
  color: #010606;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: none;
  z-index: 99999;

  ${NavItem} {
    height: fit-content;
  }

  @media screen and (max-width: 768px) {
    display: none;
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

export default Sidebar;
