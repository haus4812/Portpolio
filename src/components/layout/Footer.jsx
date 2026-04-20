import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Inner>
        <Text>© 2026 KS Portfolio. All rights reserved.</Text>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
  padding: 28px 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px 20px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.subText};
`;
