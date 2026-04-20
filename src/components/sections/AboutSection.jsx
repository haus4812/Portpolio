import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";

const AboutSection = () => {
  return (
    <Section id="about">
      <Inner>
        <Reveal>
          <SectionTitle
            label="About"
            title="디자인에서 시작해, 구조와 구현까지 확장해왔습니다"
            description="시각적 완성도만이 아니라, 사용자 흐름과 관리자 구조를 함께 고려한 서비스 설계에 강점이 있습니다."
          />
        </Reveal>

        <Grid>
          <Reveal>
            <Card $large>
              <CardTitle>디자인 기반의 시각적 사고</CardTitle>
              <CardText>
                산업디자인을 전공한 뒤 웹, 앱, 그래픽 디자인 실무를 통해
                브랜드와 디지털 콘텐츠를 실제 서비스 맥락에서 다뤄왔습니다. 이
                경험은 화면의 목적과 정보 전달 방식을 먼저 생각하는 습관으로
                이어졌습니다.
              </CardText>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <CardTitle>개발과 구조화로의 확장</CardTitle>
              <CardText>
                Java 기반 MES 웹솔루션과 데이터 분석 과정을 수료하며 프론트엔드,
                백엔드 이해, 데이터 시각화 역량을 함께 넓혀왔습니다.
              </CardText>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
            <Card>
              <CardTitle>현재의 강점</CardTitle>
              <CardText>
                지금은 복잡한 기능을 이해하기 쉬운 서비스 구조와 UI로 정리하는
                프론트엔드 개발자로 성장하고 있습니다.
              </CardText>
            </Card>
          </Reveal>
        </Grid>
      </Inner>
    </Section>
  );
};

export default AboutSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionY} 32px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: ${({ theme }) => theme.layout.sectionYMobile} 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  min-height: ${({ $large }) => ($large ? "100%" : "auto")};
  padding: 32px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.soft};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.35;
`;

const CardText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.subText};
`;
