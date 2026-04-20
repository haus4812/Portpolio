import styled from "styled-components";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";

const ContactSection = () => {
  return (
    <Section id="contact">
      <Inner>
        <Card>
          <SectionTitle
            label="Contact"
            title="기획과 구조 설계가 필요한 서비스라면, 함께 이야기 나눠보고 싶습니다"
            description="서비스 구조 정리, 관리자/사용자 화면 설계, 대시보드 시각화, 프론트엔드 구현에 관심이 있습니다."
          />

          <Info>
            <Item>
              <ItemLabel>Email</ItemLabel>
              <ItemValue>haus4812@gmail.com</ItemValue>
            </Item>

            <Item>
              <ItemLabel>GitHub</ItemLabel>
              <ItemValue
                href="https://github.com/haus4812"
                target="_blank"
                rel="noreferrer"
              >
                github.com/haus4812
              </ItemValue>
            </Item>

            <Item>
              <ItemLabel>Portfolio</ItemLabel>
              <ItemValue
                href="https://marked-whimsey-510.notion.site/8e7ba4e6c184490987750b16ea54132f?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                Notion Design Archive
              </ItemValue>
            </Item>
          </Info>

          <Button href="mailto:haus4812@gmail.com">이메일 보내기</Button>
        </Card>
      </Inner>
    </Section>
  );
};

export default ContactSection;

const Section = styled.section`
  padding: 120px 24px 140px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 80px 20px 100px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const Card = styled.div`
  padding: 48px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const ItemLabel = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const ItemValue = styled.a`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
