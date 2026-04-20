import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";

const experiences = [
  {
    period: "2016.03 - 2021.02",
    title: "호서대학교 산업디자인학과 졸업",
    desc: "산업디자인을 전공하며 시각적 표현과 사용자 관점의 문제 해결 방식을 익혔습니다.",
  },
  {
    period: "2022 - 2024",
    title: "디자인 실무 경험",
    desc: "팔팔토이, 더조은, 덴탈비서에서 브랜드, 홈페이지, 상세페이지, SNS 콘텐츠, 홍보물 제작 경험을 쌓았습니다.",
  },
  {
    period: "2025.08 - 2026.02",
    title: "JAVA 활용 스마트 팩토리 MES 웹솔루션 과정",
    desc: "Java, DB 모델링, Spring, 프론트엔드, MES 도메인 지식을 학습하며 서비스 구현 역량을 확장했습니다.",
  },
  {
    period: "2026.02 - 2026.04",
    title: "심층 데이터 분석을 통한 서비스 솔루션 개발자 과정",
    desc: "데이터 분석, 시각화, 빅데이터 아키텍처, 인사이트 도출과 서비스 개선 관점을 학습했습니다.",
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <Inner>
        <SectionTitle
          label="Experience"
          title="디자인 실무와 개발 학습, 프로젝트 경험을 함께 쌓아왔습니다"
          description="디자인에서 시작해 개발과 데이터 시각화, 협업과 문서화까지 영역을 확장해왔습니다."
        />

        <List>
          {experiences.map((item) => (
            <Item key={item.title}>
              <Period>{item.period}</Period>
              <Content>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDesc>{item.desc}</ItemDesc>
              </Content>
            </Item>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

export default ExperienceSection;

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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  padding: 28px 32px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 22px 20px;
  }
`;

const Period = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.div``;

const ItemTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 19px;
  }
`;

const ItemDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subText};
`;
