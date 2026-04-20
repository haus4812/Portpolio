import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";

const strengths = [
  {
    title: "서비스 구조 설계",
    desc: "복잡한 요구사항을 메뉴트리, 사용자 시나리오, 화면 우선순위로 정리하고 기능 흐름을 구조화합니다.",
  },
  {
    title: "프론트엔드 구현",
    desc: "React 기반으로 공통 레이아웃, 관리자 화면, 생산 대시보드, 이력 추적 등 다양한 UI를 구현합니다.",
  },
  {
    title: "데이터 시각화",
    desc: "KPI, 생산 현황, 설비 상태, 추적 흐름처럼 복잡한 정보를 한눈에 이해할 수 있도록 정리합니다.",
  },
  {
    title: "협업과 문서화",
    desc: "WBS, 일정 관리, 요구사항 정리, 발표자료 제작과 시연 준비까지 프로젝트 전반의 흐름을 연결합니다.",
  },
];

const StrengthSection = () => {
  return (
    <Section id="strength">
      <Inner>
        <Reveal>
          <SectionTitle
            label="Strength"
            title="문제를 정리하고, 전달 가능한 구조로 바꾸는 것이 제 강점입니다"
            description="디자인 감각, 구조화 능력, 화면 구현, 협업 경험을 바탕으로 프로젝트를 끝까지 연결합니다."
          />
        </Reveal>

        <Grid>
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card>
                <IconWrap>{String(index + 1).padStart(2, "0")}</IconWrap>
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.desc}</CardDesc>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default StrengthSection;

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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 32px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.medium};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 24px;
  }
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
`;

const CardTitle = styled.h3`
  margin-bottom: 14px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const CardDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.subText};
`;
