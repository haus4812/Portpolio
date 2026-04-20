import styled from "styled-components";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const HeroSection = () => {
  return (
    <Section id="hero">
      <Glow />
      <Inner>
        <Reveal>
          <Badge>Frontend · Planning · UX Structure · Dashboard</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <Title>
            디자인 경험을 바탕으로
            <br />
            기획, 화면 설계, 협업까지 연결하는
            <br />
            서비스 기획형 프론트엔드 개발자
          </Title>
        </Reveal>

        <Reveal delay={0.16}>
          <Description>
            산업디자인 전공과 디자인 실무 경험을 바탕으로, React 기반 화면
            구현과 서비스 구조 설계, 문서화와 협업까지 연결해왔습니다. 관리자
            기능, 생산 대시보드, 제조 이력 추적 화면처럼 복잡한 요구사항을
            이해하기 쉬운 구조와 UI로 정리하는 데 강점이 있습니다.
          </Description>
        </Reveal>

        <Reveal delay={0.24}>
          <ButtonGroup>
            <Button href="#projects">프로젝트 보기</Button>
            <Button href="#experience" variant="secondary">
              이력 요약 보기
            </Button>
          </ButtonGroup>
        </Reveal>

        <Reveal delay={0.3}>
          <HighlightGrid>
            <HighlightCard>
              <HighlightLabel>Core</HighlightLabel>
              <HighlightValue>Service Planning</HighlightValue>
            </HighlightCard>
            <HighlightCard>
              <HighlightLabel>Focus</HighlightLabel>
              <HighlightValue>Admin · Dashboard · UX</HighlightValue>
            </HighlightCard>
            <HighlightCard>
              <HighlightLabel>Strength</HighlightLabel>
              <HighlightValue>Design + Structure + Frontend</HighlightValue>
            </HighlightCard>
          </HighlightGrid>
        </Reveal>
      </Inner>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 152px 32px 132px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 112px 20px 88px;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: 30px;
  right: -120px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.16), transparent 64%);
  pointer-events: none;
`;

const Inner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: ${({ theme }) => theme.media.small}) {
    padding: 10px 14px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  line-height: 1.12;
  letter-spacing: -0.04em;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.h1};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

const Description = styled.p`
  max-width: 840px;
  margin-top: 28px;
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.subText};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  padding: 24px 24px 26px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const HighlightLabel = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

const HighlightValue = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5;
`;
