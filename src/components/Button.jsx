import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const Button = ({ primary, big, dark, bigfont, children, ...props }) => {
  return (
    <Container
      {...props}
      primary={primary}
      big={big}
      dark={dark}
      bigfont={bigfont}
    >
      {children}
    </Container>
  );
};

const Container = styled(ScrollLink)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ bigfont }) => (bigfont ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;

export default Button;
