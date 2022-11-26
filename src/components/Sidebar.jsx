import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

const Sidebar = ({ isOpen, onCloseMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={onCloseMenu}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={onCloseMenu}>
            من نحن
          </SidebarLink>

          {/* <SidebarLink to="discover" onClick={onCloseMenu}>
            Discover
          </SidebarLink> */}

          <SidebarLink to="services" onClick={onCloseMenu}>
            خدماتنا
          </SidebarLink>

          <SidebarLink to="contact-us" onClick={onCloseMenu}>
            تواصل معنا
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
  font-family: "Cairo", "sans-serif";
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
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
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #e8591d;
    transition: 0.2s ease-in-out;
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
    background-color: #fff;
    color: #010606;
  }
`;

export default Sidebar;
