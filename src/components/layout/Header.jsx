import { useEffect, useState } from "react";
import styled from "styled-components";
import ThemeToggle from "../common/ThemeToggle";

const Header = ({ isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <Inner>
        <Logo href="#hero">김경선 Portfolio</Logo>

        <RightArea>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#strength">Strength</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>

          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
        </RightArea>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1200;
  width: 100%;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    backdrop-filter 0.25s ease;
  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.header : theme.colors.headerTransparent};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(14px)" : "blur(4px)"};
  border-bottom: 1px solid
    ${({ theme, $scrolled }) =>
      $scrolled ? theme.colors.border : "transparent"};
  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadow.soft : "none"};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 18px 20px;
  }
`;

const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  letter-spacing: -0.02em;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.subText};
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
