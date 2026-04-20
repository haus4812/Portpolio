import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <Logo href="#hero">김경선 Portfolio</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#strength">Strength</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(249, 250, 251, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 16px 20px;
  }
`;

const Logo = styled.a`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.subText};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
