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
    margin-bottom: 36px;
  }
`;

const Label = styled.p`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 1.2;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

const Description = styled.p`
  max-width: 760px;
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.subText};
`;
