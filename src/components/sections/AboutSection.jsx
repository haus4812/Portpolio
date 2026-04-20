import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";

const AboutSection = () => {
  return (
    <Section id="about">
      <Inner>
        <SectionTitle
          label="About"
          title="디자인에서 시작해, 구조와 구현까지 확장해왔습니다"
          description="시각적 완성도만이 아니라, 사용자 흐름과 관리자 구조를 함께 고려한 서비스 설계에 강점이 있습니다."
        />

        <Content>
          <Paragraph>
            산업디자인을 전공한 뒤 웹, 앱, 그래픽 디자인 실무를 통해 브랜드와
            디지털 콘텐츠를 실제 서비스 맥락에서 다뤄왔습니다. 이 경험은 화면의
            목적과 정보 전달 방식을 먼저 생각하는 습관으로 이어졌습니다.
          </Paragraph>

          <Paragraph>
            이후 Java 기반 MES 웹솔루션과 데이터 분석 과정을 수료하며
            프론트엔드와 백엔드, 데이터 시각화 역량을 함께 넓혀왔습니다. 지금은
            복잡한 기능을 이해하기 쉬운 서비스 구조와 UI로 정리하는 프론트엔드
            개발자로 성장하고 있습니다.
          </Paragraph>
        </Content>
      </Inner>
    </Section>
  );
};

export default AboutSection;

const Section = styled.section`
  padding: 120px 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 80px 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Paragraph = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.subText};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px;
    font-size: 16px;
  }
`;
