import styled from "styled-components";

const SectionTitle = ({ label, title, description }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SectionTitle;

const Wrapper = styled.div`
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 32px;
  }
`;

const Label = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 1.25;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  max-width: 720px;
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subText};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 16px;
  }
`;
